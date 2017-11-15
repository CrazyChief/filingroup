from rest_framework import serializers

from about_us.models import AboutModel
from courses.models import Teacher, Discount, CourseTypes, Course, Privilege, Student, CourseReview
from blog.models import Category, Tag, Post, Comment
from sending_agreement.models import Agreement
from privacy_policy.models import PrivacyPolicy
from site_rules.models import SiteRule
from denial.models import Denial


# About us serializers
class AboutUsSerializer(serializers.ModelSerializer):

    class Meta:
        model = AboutModel
        fields = (
            'id',
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
            'id',
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
            'id',
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
            'id',
            'title',
            'is_active',
        )


class CoursePreviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = Course
        fields = (
            'id',
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
            'id',
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
            'id',
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
            'id',
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
            'id',
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
            'id',
            'title',
            'slug',
            'is_active',
            'date_added',
        )


class TagSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tag
        fields = (
            'id',
            'title',
            'slug',
            'is_active',
            'date_added',
        )


class PostSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = (
            'id',
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
            'id',
            'post',
            'name',
            'email',
            'text',
            'parent',
            'user',
            'date_added',
        )


# sending_agreement serializers
class AgreementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Agreement
        fields = (
            'id',
            'title',
            'content',
            'is_active',
            'date_added',
            'date_updated',
        )


# privacy_policy serializers
class PrivacyPolicySerializer(serializers.ModelSerializer):

    class Meta:
        model = PrivacyPolicy
        fields = (
            'id',
            'title',
            'is_active',
            'content',
            'date_added',
            'date_updated',
        )


# site_rules serializers
class SiteRuleSerializer(serializers.ModelSerializer):

    class Meta:
        model = SiteRule
        fields = (
            'id',
            'title',
            'is_active',
            'content',
            'date_added',
            'date_updated',
        )


# denial serializers
class DenialSerializer(serializers.ModelSerializer):

    class Meta:
        model = Denial
        fields = (
            'id',
            'title',
            'is_active',
            'content',
            'date_added',
            'date_updated',
        )
