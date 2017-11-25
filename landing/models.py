from django.utils.translation import ugettext_lazy as _
from django.db import models

from courses.models import Course


class Landing(models.Model):
    url = models.URLField(verbose_name=_('URL/Link'))
    title = models.CharField(max_length=200, verbose_name=_('Title'))
    course = models.ForeignKey(Course, null=True, on_delete=models.SET_NULL, verbose_name=_('Course'))
    slug = models.SlugField(null=True, blank=True)
    meta_description = models.TextField(null=True, blank=True, verbose_name=_('Meta description'))
    is_active = models.BooleanField(default=False, verbose_name=_('Is landing active?'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))
    date_changed = models.DateTimeField(auto_now=True, verbose_name=_('Date changed'))

    class Meta:
        ordering = ['-date_added']
        verbose_name = _('Landing')
        verbose_name_plural = _('Landings')

    def __str__(self):
        if self.course is not None:
            return "Landing {} for {} course".format(self.title, self.course)
        else:
            return "Landing {}".format(self.title)

    def is_landing_active(self):
        return self.is_active

    is_landing_active.admin_order_field = "is_active"
    is_landing_active.boolean = True
    is_landing_active.short_description = _("Is landing active?")


