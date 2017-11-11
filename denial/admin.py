from django.contrib import admin
from django.db.models import TextField

from ckeditor_uploader.widgets import CKEditorUploadingWidget
from .models import Denial


class DenialAdmin(admin.ModelAdmin):
    list_display = (
        'title', 'is_active', 'date_added', 'date_updated',
    )
    list_filter = [
        'is_active', 'date_added', 'date_updated',
    ]
    formfield_overrides = {TextField: {'widget': CKEditorUploadingWidget}}


admin.site.register(Denial, DenialAdmin)