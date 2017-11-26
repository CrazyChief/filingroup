from django.contrib import admin
from .models import Landing


@admin.register(Landing)
class LandingAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("course",)}
    list_display = (
        'title', 'course', 'is_landing_active', 'date_added', 'date_changed'
    )
    list_filter = [
        'date_added', 'date_changed'
    ]
