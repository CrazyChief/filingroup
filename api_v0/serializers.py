from django.contrib.auth.models import User
from rest_framework import serializers

from about_us.models import AboutModel
from courses.models import Teacher, Discount, CourseTypes, Course, Privilege, Student, CourseReview
from blog.models import Category, Tag, Post, Comment
from sending_agreement.models import Agreement
from privacy_policy.models import PrivacyPolicy
from site_rules.models import SiteRule
from denial.models import Denial
from take_access.models import Access
from rating.models import Rating


# Rating serializer
class RatingSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Rating
        fields = (
            'count',
            'total',
            'average',
        )


# Take access serializer
class AccessSerializer(serializers.ModelSerializer):

    class Meta:
        model = Access
        fields = (
            'name',
            'phone',
            'email',
        )


# Additional serializers
class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'username',
            'first_name',
            'last_name',
            'email',
        )


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
            'meta_title',
            'meta_description',
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


class CourseSerializer(serializers.ModelSerializer):

    teachers = TeacherSerializer(many=True, read_only=True)
    course_type = CourseTypesSerializer(read_only=True)
    discount = DiscountSerializer(read_only=True)

    class Meta:
        model = Course
        fields = (
            'id',
            'title',
            'slug',
            'course_picture',
            'course_type',
            'discount',
            'teachers',
            'places',
            'free_places',
            'description',
            'price',
            'is_active',
            'consulting_time',
            'consulting_time_availability_on_this_week',
            'couching_timing',
            'couching_consult_time',
            'couching_time_availability_on_this_month',
            'meta_title',
            'meta_description',
            'date_added',
        )


class PrivilegeSerializer(serializers.ModelSerializer):

    courses = CourseSerializer(many=True, read_only=True)

    class Meta:
        model = Privilege
        fields = (
            'id',
            'type',
            'title',
            'courses',
            'price',
            'description',
            'date_added',
        )


class StudentSerializer(serializers.ModelSerializer):

    # courses = CourseSerializer(many=True, read_only=True)

    class Meta:
        model = Student
        fields = (
            'id',
            'name',
            'email',
            'phone',
            'skype',
            'courses',
            'date_added',
        )


class CourseReviewSerializer(serializers.ModelSerializer):

    # course = CourseSerializer(read_only=True)

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
            'link_to_vk',
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

    category = CategoryBlogSerializer(read_only=True)
    tags = TagSerializer(many=True, read_only=True)
    author = UserSerializer(read_only=True)
    ratings = RatingSerializer()

    class Meta:
        model = Post
        fields = (
            'id',
            'title',
            'slug',
            'cover_picture',
            'category',
            'is_published',
            'announce',
            'content',
            'tags',
            'author',
            'meta_title',
            'meta_description',
            'date_added',
            'ratings',
        )
        lookup_field = 'slug'


class CommentSerializer(serializers.ModelSerializer):
    post = PostSerializer(read_only=True)

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
            'meta_title',
            'meta_description',
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
            'meta_title',
            'meta_description',
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
            'meta_title',
            'meta_description',
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
            'meta_title',
            'meta_description',
            'date_added',
            'date_updated',
        )
