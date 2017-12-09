from django.views.generic import TemplateView
from django.views.generic.edit import FormMixin

from .models import Landing
from .forms import (TakeAccessForm1, TakeAccessForm2, ConsultForm1)


class LandingView(TemplateView, FormMixin):
    form_class = TakeAccessForm1
    second_form_class = TakeAccessForm2
    consult_form_class = ConsultForm1

    def get(self, request, *args, **kwargs):
        # self.slug = request.GET['slug']
        # print(request.META["PATH_INFO"].split('/'))
        # print(request.META["PATH_INFO"].split('/')[2])
        piece = request.META["PATH_INFO"].split('/')[2]
        path_piece = Landing.objects.get(slug__exact=request.META["PATH_INFO"].split('/')[2]).title
        self.template_name = "landing/{}.html".format(path_piece)
        return super(LandingView, self).get(request, *args, **kwargs)


class ThanksView(TemplateView):
    template_name = 'landing/thanks.html'

    # def get(self):
    #     pass
