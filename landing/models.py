from django.utils.translation import ugettext_lazy as _
from django.core.files.storage import FileSystemStorage
from django.conf import settings
from django.db import models

from courses.models import Course


upload_storage = FileSystemStorage(location=settings.LANDING_UPLOAD_ROOT, base_url='/landing')


class Landing(models.Model):
    title = models.CharField(max_length=200, verbose_name=_('Title'))
    template_file = models.FileField(upload_to='',
                                     storage=upload_storage,
                                     verbose_name=_('Template file (HTML file)'))
    title_page = models.CharField(max_length=250, default="", verbose_name=_('Title for page'))
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
        return "Landing {}".format(self.title_page)

    def is_landing_active(self):
        return self.is_active

    is_landing_active.admin_order_field = "is_active"
    is_landing_active.boolean = True
    is_landing_active.short_description = _("Is landing active?")


#   deleting uploaded file from file storage,
#   when model object had deleted from db.
#   Template(.html) file in our case.
from django.db.models.signals import pre_delete
from django.dispatch.dispatcher import receiver

@receiver(pre_delete, sender=Landing)
def template_delete(sender, instance, **kwargs):
    instance.template_file.delete(False)


