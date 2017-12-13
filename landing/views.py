import json
import requests
from django.conf import settings
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.views.generic import TemplateView
from django.views.generic.edit import FormMixin

from .models import Landing
from .forms import (TakeAccessForm1, TakeAccessForm2, ConsultForm1, WebinarMoreForm,
                    CourseMinForm)


class LandingView(TemplateView, FormMixin):
    form_class = TakeAccessForm1
    second_form_class = TakeAccessForm2
    consult_form_class = ConsultForm1
    webinar_more_form_class = WebinarMoreForm
    course_min_form_class = CourseMinForm

    def get(self, request, *args, **kwargs):
        self.piece = request.META["PATH_INFO"].split('/')[2]
        self.path_piece = Landing.objects.get(slug__exact=self.piece)
        self.template_name = "landing/{}.html".format(self.path_piece.title)
        return super(LandingView, self).get(request, *args, **kwargs)

    def get_second_form_class(self):
        return self.second_form_class

    def get_second_form(self, form_class=None):
        if form_class is None:
            form_class = self.get_second_form_class()
        return form_class(**self.get_form_kwargs())

    def get_consult_form_class(self):
        return self.consult_form_class

    def get_consult_form(self, form_class=None):
        if form_class is None:
            form_class = self.get_consult_form_class()
        return form_class(**self.get_form_kwargs())

    def get_webinar_more_form_class(self):
        return self.webinar_more_form_class

    def get_webinar_more_form(self, form_class=None):
        if form_class is None:
            form_class = self.get_webinar_more_form_class()
        return form_class(**self.get_form_kwargs())

    def get_course_min_form_class(self):
        return self.course_min_form_class

    def get_course_min_form(self, form_class=None):
        if form_class is None:
            form_class = self.get_consult_form_class()
        return form_class(**self.get_form_kwargs())

    def get_context_data(self, **kwargs):
        context = super(LandingView, self).get_context_data(**kwargs)
        context['p_info'] = self.path_piece
        context['form'] = self.get_form()
        context['take_access_form2'] = self.get_second_form(form_class=self.second_form_class)
        context['consult_form'] = self.get_consult_form(form_class=self.consult_form_class)
        context['webinar_more_form'] = self.get_webinar_more_form(form_class=self.webinar_more_form_class)
        context['course_min_form'] = self.get_course_min_form(form_class=self.course_min_form_class)
        return context

    @staticmethod
    def prepare_data(data):
        url = 'https://api.getresponse.com/v3/contacts/'
        headers = {
            'X-Auth-Token': 'api-key {}'.format(settings.GR_API_KEY),
            'Content-Type': 'application/json'
        }
        r = requests.post(url, data=json.dumps(data), headers=headers)
        print(r.status_code)
        print(r.text)
        return str(r.status_code)

    def post(self, request, *args, **kwargs):
        if 'form' in request.POST:
            form_class = self.get_form_class()
            form_name = 'form'
        elif 'take_access_form2' in request.POST:
            form_class = self.get_second_form_class()
            form_name = 'take_access_form2'
        elif 'consult_form' in request.POST:
            form_class = self.get_consult_form_class()
            form_name = 'consult_form'
        elif 'webinar_more_form' in request.POST:
            form_class = self.get_webinar_more_form_class()
            form_name = 'webinar_more_form'
        else:
            form_class = self.get_course_min_form_class()
            form_name = 'course_min_form'
        form = self.get_form(form_class)
        if form.is_valid():
            return self.form_valid(form)
        else:
            return self.form_invalid(**{form_name: form})

    def form_valid(self, form):
        if 'form' in self.request.POST:
            name = str(self.request.POST.get('name'))
            phone = str(self.request.POST.get('phone'))
            email = str(self.request.POST.get('email'))
            data = {
                'name': name,
                'email': email,
                "dayOfCycle": '0',
                'campaign': {
                    'campaignId': settings.GR_VIDEO_TOKEN
                },
                "customFieldValues": [
                    {
                        "customFieldId": "OmdJ2",
                        "value": [phone]
                    }
                ]
            }
        elif 'take_access_form2' in self.request.POST:
            # try:
            name = str(self.request.POST.get('name'))
            email = str(self.request.POST.get('email'))
            # except:
            #     name = ''
            #     email = ''
            data = {'name': name, 'email': email, "dayOfCycle": '0', 'campaign': {'campaignId': settings.GR_VIDEO_TOKEN}}
        elif 'consult_form' in self.request.POST:
            name = str(self.request.POST.get('name'))
            phone = str(self.request.POST.get('phone'))
            email = str(self.request.POST.get('email'))
            try:
                skype = str(self.request.POST.get('skype'))
            except:
                # name = ''
                # phone = ''
                # email = ''
                skype = ''
            if skype == '':
                data = {'name': name, 'email': email, "dayOfCycle": '0', 'campaign': {'campaignId': settings.GR_CONSULT_WITHOUT_PAY_TOKEN},
                        "customFieldValues": [{"customFieldId": "OmdJ2", "value": [phone]}]}
            else:
                data = {'name': name, 'email': email, "dayOfCycle": '0', 'campaign': {'campaignId': settings.GR_CONSULT_WITHOUT_PAY_TOKEN}, "customFieldValues": [{"customFieldId": "OmdJ2", "value": [phone]}, {"customFieldId": "l67O2", "value": [skype]}]}
        elif 'webinar_more_form' in self.request.POST:
            # try:
            email = str(self.request.POST.get('email'))
            # except:
            #     email = ''
            data = {'name': 'AskByEmail', 'email': email, "dayOfCycle": '0', 'campaign': {'campaignId': settings.GR_CHECK_LIST}}
        elif 'course_min_form':
            name = str(self.request.POST.get('name'))
            email = str(self.request.POST.get('email'))
            try:
                hidden_choice = int(self.request.POST.get('hidden_choice'))
            except:
                # name = ''
                # email = ''
                hidden_choice = ''
            data = {
                'name': name,
                'email': email,
                "dayOfCycle": '0',
                'campaign': {
                    'campaignId': settings.GR_VIDEO_TOKEN
                }
            }
            if hidden_choice == '':
                data['campaign']['campaignId'] = settings.GR_COURSE_START_WITHOUT_PAY_TOKEN
            elif hidden_choice == 1:
                data['campaign']['campaignId'] = settings.GR_COURSE_START_WITHOUT_PAY_TOKEN
            elif hidden_choice == 2:
                data['campaign']['campaignId'] = settings.GR_COURSE_ALL_WITHOUT_PAY_TOKEN
            elif hidden_choice == 3:
                data['campaign']['campaignId'] = settings.GR_COURSE_VIP_WITHOUT_PAY_TOKEN
        try:
            name = self.request.POST.get('name')
        except:
            name = None
        self.th_name = name
        print(data)

        if self.prepare_data(data=data) == '202':
            if self.request.POST.get('name') is not None:
                self.request.session['u_name'] = self.request.POST.get('name')
        else:
            self.request.session['slf'] = self.request.META["PATH_INFO"].split('/')[2]
            reverse('landings:error')
        return super(LandingView, self).form_valid(form)

    def form_invalid(self, form):
        self.request.session['slf'] = self.request.META["PATH_INFO"].split('/')[2]
        return reverse('landings:error', kwargs={
            'slug': self.request.META["PATH_INFO"].split('/')[2]
        })

    def get_success_url(self):
        return reverse('landings:thanks', kwargs={
            'slug': self.request.META["PATH_INFO"].split('/')[2]
        })


class ThanksView(TemplateView):
    template_name = 'landing/thanks.html'

    def get(self, request, *args, **kwargs):
        return super(ThanksView, self).get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(ThanksView, self).get_context_data(**kwargs)
        context['th_name'] = self.request.session.get('u_name')
        return context


class ErrorView(TemplateView):
    template_name = 'landing/error.html'

    def get_context_data(self, **kwargs):
        context = super(ErrorView, self).get_context_data(**kwargs)
        context['slf'] = self.request.session.get('slf')
        return context
