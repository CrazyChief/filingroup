from django.conf.urls import url
from .views import LandingView, ThanksView, ErrorView

app_name = 'landings'
urlpatterns = [
    url(r'^(?P<slug>[-\w]+)([/]+|([^.*/]+))$', LandingView.as_view(), name='land_view'),
    url(r'^(?P<slug>[-\w]+)/thanks/$', ThanksView.as_view(), name='thanks'),
    url(r'^error/$', ErrorView.as_view(), name='error'),
]

