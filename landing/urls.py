from django.conf.urls import url
from .views import LandingView


urlpatterns = [
    url(r'^(?P<slug>[-\w]+)/$', LandingView.as_view()),
]

