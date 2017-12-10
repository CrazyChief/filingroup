from django.conf.urls import url
from .views import LandingView, ThanksView

app_name = 'landings'
urlpatterns = [
    url(r'^(?P<slug>[-\w]+)([/]+|([^.*/]+))$', LandingView.as_view()),
    url(r'^(?P<slug>[-\w]+)/thanks/$', ThanksView.as_view(), name='thanks'),
]

