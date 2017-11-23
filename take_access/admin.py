from django.contrib import admin
from .models import Access


@admin.register(Access)
class AccessAdmin(admin.ModelAdmin):
    list_display = (
        'name', 'phone', 'email', 'date_added'
    )
    list_filter = [
        'date_added'
    ]
