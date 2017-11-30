from django.contrib import admin
from .models import Landing


@admin.register(Landing)
class LandingAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title_page",)}
    list_display = (
        'title', 'title_page', 'is_landing_active', 'date_added', 'date_changed'
    )
    list_filter = [
        'date_added', 'date_changed'
    ]
