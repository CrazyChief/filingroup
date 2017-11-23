from django.utils.translation import ugettext_lazy as _
from django.db import models


class Access(models.Model):
    name = models.CharField(max_length=60, verbose_name=_('Name'))
    phone = models.CharField(max_length=20, null=True, blank=True, verbose_name=_('Phone'))
    email = models.EmailField(max_length=100, verbose_name=_('Email'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))

    class Meta:
        ordering = ['-date_added']
        verbose_name = _('Access')
        verbose_name_plural = _('Accesses')

    def __str__(self):
        return "{} - {}".format(self.name, self.email)
