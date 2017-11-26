from django.views.generic import TemplateView

from .models import Landing


class LandingView(TemplateView):

    def get(self, request, *args, **kwargs):
        # self.slug = request.GET['slug']
        # print(request.META["PATH_INFO"].split('/')[2])
        path_piece = Landing.objects.get(slug__exact=request.META["PATH_INFO"].split('/')[2]).title
        # print(Landing.objects.get(slug__exact=request.META["PATH_INFO"].split('/')[2]).title)
        self.template_name = "landing/{}.html".format(path_piece)
        return super(LandingView, self).get(request, *args, **kwargs)



