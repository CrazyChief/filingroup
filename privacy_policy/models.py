from django.utils.translation import ugettext_lazy as _
from django.db import models


class PrivacyPolicy(models.Model):
    title = models.CharField(max_length=100, verbose_name=_('Version of Privacy Policy'))
    is_active = models.BooleanField(default=False, verbose_name=_('Is this version active?'))
    content = models.TextField(verbose_name=_('Content'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))
    date_updated = models.DateTimeField(auto_now=True, verbose_name=_('Date updated'))

    class Meta:
        ordering = ['-date_added']
        verbose_name = _('Privacy Policy')
        verbose_name_plural = _('Privacy Policy')

    def __str__(self):
        return str(self.title)