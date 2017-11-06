from django.contrib import admin
from django.db.models import TextField
from .models import AboutModel
from ckeditor_uploader.widgets import CKEditorUploadingWidget


class AboutAdmin(admin.ModelAdmin):
    list_display = (
        'title', 'date_added', 'date_updated',
    )
    list_filter = [
        'date_added', 'date_updated',
    ]
    formfield_overrides = {TextField: {'widget': CKEditorUploadingWidget}, }


admin.site.register(AboutModel, AboutAdmin)
