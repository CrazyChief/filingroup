from rest_framework import serializers

from .models import Teacher, Discount, Course, CourseTypes, Student, CourseReview


class TeacherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Teacher
        fields = ('first_name', 'last_name', 'email', 'avatar', 'age', 'description')


class DiscountSerializer(serializers.ModelSerializer):

    class Meta:
        model = Discount
        fields = ('title', 'slug', 'percents', 'from_date', 'till_date', 'author', 'created_at')


class CourseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = ('title', 'slug', 'discount', 'teachers', 'places', 'free_places', 'description', 'price', 'is_active', 'date_added')


class CourseTypesSerializer(serializers.ModelSerializer):

    class Meta:
        model = CourseTypes
        fields = ('permission', 'title', 'course', 'is_active', 'description')


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = ('first_name', 'last_name', 'email', 'phone', 'skype', 'courses', 'date_added')


class CourseReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = CourseReview
        fields = ('course', 'first_name', 'last_name', 'avatar', 'link_to_fb', 'link_to_inst', 'link_to_linkedin', 'review', 'video', 'date_added')

