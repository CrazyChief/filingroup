from django.contrib import admin
from .models import Rating


@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    list_display = ('content_type', 'object_id', 'content_object', 'count', 'total', 'average')

