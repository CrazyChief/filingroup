from django.utils.translation import ugettext_lazy as _
from django.db import models

from courses.models import Course


def upload_path(instance, filename):
    """
    Path for about model where files are stored
    :param instance:
    :param filename:
    :return:
    """
    return "about_us/{0}".format(filename)


class AboutModel(models.Model):
    title = models.CharField(max_length=100, verbose_name=_('Type of content (first try, etc.)'))
    logo = models.FileField(upload_to=upload_path, verbose_name=_('About Us'))
    is_active = models.BooleanField(default=False, verbose_name=_('Is About description active?'))
    text = models.TextField(verbose_name=_('Text'))
    meta_title = models.CharField(max_length=250, null=True, verbose_name=_('SEO/Meta title'))
    meta_description = models.TextField(null=True, verbose_name=_('SEO/Meta description'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))
    date_updated = models.DateTimeField(auto_now=True, verbose_name=_('Date updated'))

    class Meta:
        verbose_name = _('About Us')
        verbose_name_plural = _('About Us')

    def __str__(self):
        return str(self.title)
