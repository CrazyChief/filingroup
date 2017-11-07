from rest_framework import serializers

from about_us.models import AboutModel
from courses.models import Teacher, Discount, CourseTypes, Course, Privilege, Student, CourseReview
from blog.models import Category, Tag, Post, Comment
from sending_agreement.models import Agreement


# About us serializers
class AboutUsSerializer(serializers.ModelSerializer):

    class Meta:
        model = AboutModel
        fields = (
            'title',
            'logo',
            'is_active',
            'text',
            'date_added',
            'date_updated',
        )


# Courses serializers
class TeacherSerializer(serializers.ModelSerializer):

    class Meta:
        model = Teacher
        fields = (
            'first_name',
            'last_name',
            'email',
            'avatar',
            'age',
            'description',
        )


class DiscountSerializer(serializers.ModelSerializer):

    class Meta:
        model = Discount
        fields = (
            'title',
            'slug',
            'percents',
            'from_date',
            'till_date',
            'author',
            'created_at',
        )


class CourseTypesSerializer(serializers.ModelSerializer):

    class Meta:
        model = CourseTypes
        fields = (
            'title',
            'is_active',
        )


class CoursePreviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = (
            'title',
            'slug',
            'course_type',
            'discount',
            'places',
            'free_places',
            'price',
        )


class CourseDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = (
            'title',
            'slug',
            'course_type',
            'discount',
            'teachers',
            'places',
            'free_places',
            'description',
            'price',
            'is_active',
            'date_added',
        )


class PrivilegeSerializer(serializers.ModelSerializer):

    class Meta:
        model = Privilege
        fields = (
            'type',
            'courses',
            'price',
            'description',
            'date_added',
        )


class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Student
        fields = (
            'first_name',
            'last_name',
            'email',
            'phone',
            'skype',
            'courses',
            'date_added',
        )


class CourseReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = CourseReview
        fields = (
            'course',
            'first_name',
            'last_name',
            'avatar',
            'link_to_fb',
            'link_to_inst',
            'link_to_linkedin',
            'review',
            'video',
            'date_added',
        )


# Blog serializers
class CategoryBlogSerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = (
            'title',
            'slug',
            'is_active',
            'date_added',
        )


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = (
            'title',
            'slug',
            'is_active',
            'date_added',
        )


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = (
            'title',
            'slug',
            'cover_picture',
            'category',
            'is_published',
            'announce', 'content',
            'tags',
            'author',
            'date_added',
        )
        lookup_field = 'slug'


class CommentSerializer(serializers.ModelSerializer):

    class Meta:
        model = Comment
        fields = (
            'post',
            'name',
            'email',
            'text',
            'parent',
            'user',
            'date_added',
        )


# sending_agreement app
class AgreementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Agreement
        fields = (
            'title',
            'content',
            'is_active',
            'date_added',
            'date_updated',
        )

