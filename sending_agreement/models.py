from django.utils.translation import ugettext_lazy as _
from django.db import models


class Agreement(models.Model):
    title = models.CharField(max_length=100, verbose_name=_('Version of agreement'))
    content = models.TextField(verbose_name=_('Content'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))
    date_updated = models.DateTimeField(auto_now=True, verbose_name=_('Date updated'))

    class Meta:
        ordering = ['-date_added']
        verbose_name = _('Agreement')
        verbose_name_plural = _('Agreement')

    def __str__(self):
        return str(self.title)
