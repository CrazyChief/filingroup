from django.contrib import admin
from django.db.models import TextField
from .models import Category, Tag, Post, Comment
from ckeditor_uploader.widgets import CKEditorUploadingWidget


class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    list_display = (
        'title', 'is_active', 'date_added',
    )
    list_filter = [
        'is_active', 'date_added',
    ]


class TagAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    list_display = (
        'title', 'is_active', 'date_added',
    )
    list_filter = [
        'is_active', 'date_added',
    ]


class PostAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    radio_fields = {'is_published': admin.HORIZONTAL}
    list_display = (
        'title',
        'is_post_published',
        'date_added',
    )
    list_filter = [
        'date_added',
        'is_published',
    ]
    filter_horizontal = ('tag',)
    formfield_overrides = {TextField: {'widget': CKEditorUploadingWidget}, }


class CommentAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'email',
        'date_added',
    )
    list_filter = ['date_added']
    formfield_overrides = {TextField: {'widget': CKEditorUploadingWidget},}


admin.site.register(Category, CategoryAdmin)
admin.site.register(Tag, TagAdmin)
admin.site.register(Post, PostAdmin)
admin.site.register(Comment, CommentAdmin)
