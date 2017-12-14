from django.utils.translation import ugettext_lazy as _
from django.db import models


class Denial(models.Model):
    title = models.CharField(max_length=100, verbose_name=_('Version of Denial of responsibility'))
    is_active = models.BooleanField(default=False, verbose_name=_('Is this version active?'))
    content = models.TextField(verbose_name=_('Content'))
    meta_title = models.CharField(max_length=250, null=True, verbose_name=_('SEO/Meta title'))
    meta_description = models.TextField(null=True, verbose_name=_('SEO/Meta description'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))
    date_updated = models.DateTimeField(auto_now=True, verbose_name=_('Date updated'))

    class Meta:
        ordering = ['-date_added']
        verbose_name = _('Denial of responsibility')
        verbose_name_plural = _('Denial of responsibility')

    def __str__(self):
        return str(self.title)
