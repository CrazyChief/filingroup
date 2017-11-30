from django.contrib import admin
from django.db.models import TextField

from ckeditor_uploader.widgets import CKEditorUploadingWidget
from .models import Teacher, Discount, CourseTypes, Course, Privilege, Student, CourseReview


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


class CourseTypesAdmin(admin.ModelAdmin):
    list_display = (
        'title', 'is_active',
    )
    list_filter = [
        'is_active',
    ]


class CourseAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    list_display = (
        'title', 'places', 'free_places', 'price', 'is_active', 'date_added'
    )
    list_filter = [
        'teachers', 'places', 'free_places', 'price', 'is_active', 'date_added',
    ]
    fieldsets = (
        (None, {
            'fields': ('title', 'slug', 'course_picture', 'course_type', 'discount', 'teachers', 'places', 'free_places', 'price', 'is_active')
        }),
        ('Description', {
            'fields': ('description',)
        }),
        ('SEO/Meta', {
            'fields': ('meta_title', 'meta_description')
        }),
        ("Advanced settings for consults. (Don't fill this fields, if your course aren't Consult type)", {
            'fields': ('consulting_time', 'consulting_time_availability_on_this_week')
        }),
        ("Advanced settings for couchings. (Don't fill this fields, if your course aren't Couching type)", {
            'fields': ('couching_timing', 'couching_consult_time', 'couching_time_availability_on_this_month')
        })
    )
    filter_horizontal = ('teachers',)
    formfield_overrides = {TextField: {'widget': CKEditorUploadingWidget}}


class PrivilegeAdmin(admin.ModelAdmin):
    list_display = (
        'type', 'price', 'date_added',
    )
    list_filter = [
        'type', 'price', 'date_added',
    ]
    filter_horizontal = ('courses',)
    formfield_overrides = {TextField: {'widget': CKEditorUploadingWidget}}


class StudentAdmin(admin.ModelAdmin):
    list_display = (
        'name', 'email', 'phone', 'date_added',
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
admin.site.register(CourseTypes, CourseTypesAdmin)
admin.site.register(Course, CourseAdmin)
admin.site.register(Privilege, PrivilegeAdmin)
admin.site.register(Student, StudentAdmin)
admin.site.register(CourseReview, CourseReviewAdmin)
