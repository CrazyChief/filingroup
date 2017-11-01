from django.contrib import admin
from django.db.models import TextField

from ckeditor_uploader.widgets import CKEditorUploadingWidget
from .models import Teacher, Discount, Course, CourseTypes, Student, CourseReview


class TeacherAdmin(admin.ModelAdmin):
    list_display = (
        'first_name', 'last_name', 'email',
    )
    formfield_overrides = {TextField: {'widget': CKEditorUploadingWidget}}


class DiscountAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    list_display = (
        'title', 'percents', 'from_date', 'till_date', 'created_at',
    )
    list_filter = [
        'percents', 'created_at',
    ]


class CourseAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    list_display = (
        'title', 'places', 'free_places', 'price', 'is_active', 'date_added'
    )
    list_filter = [
        'teachers', 'places', 'free_places', 'price', 'is_active', 'date_added',
    ]
    formfield_overrides = {TextField: {'widget': CKEditorUploadingWidget}}


class CourseTypesAdmin(admin.ModelAdmin):
    list_display = (
        'title', 'course', 'is_active',
    )
    list_filter = [
        'course', 'is_active',
    ]
    formfield_overrides = {TextField: {'widget': CKEditorUploadingWidget}}


class StudentAdmin(admin.ModelAdmin):
    list_display = (
        'first_name', 'last_name', 'email', 'phone', 'date_added',
    )
    list_filter = [
        'email', 'phone', 'date_added',
    ]


class CourseReviewAdmin(admin.ModelAdmin):
    list_display = (
        'course', 'first_name', 'last_name', 'date_added',
    )
    list_filter = [
        'course', 'date_added',
    ]
    formfield_overrides = {TextField: {'widget': CKEditorUploadingWidget}}


admin.site.register(Teacher, TeacherAdmin)
admin.site.register(Discount, DiscountAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(CourseTypes, CourseTypesAdmin)
admin.site.register(Student, StudentAdmin)
admin.site.register(CourseReview, CourseReviewAdmin)
