from rest_framework import viewsets

from about_us.models import AboutModel
from courses.models import Teacher, Discount, CourseTypes, Course, Privilege, Student, CourseReview
from blog.models import Category, Tag, Post, Comment
from sending_agreement.models import Agreement
from privacy_policy.models import PrivacyPolicy
from site_rules.models import SiteRule
from denial.models import Denial
from .serializers import AboutUsSerializer, TeacherSerializer, DiscountSerializer, CourseTypesSerializer,\
    CoursePreviewSerializer, CourseDetailSerializer, PrivilegeSerializer, StudentSerializer,\
    CourseReviewSerializer, CategoryBlogSerializer, TagSerializer, PostSerializer, CommentSerializer,\
    AgreementSerializer, PrivacyPolicySerializer, SiteRuleSerializer, DenialSerializer


# About us viewsets
class AboutUsViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing About objects
    """
    queryset = AboutModel.objects.all()
    serializer_class = AboutUsSerializer


# Courses views/viewsets
class TeacherViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Teacher objects
    """
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class CourseTypesViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing CourseTypes objects
    """
    queryset = CourseTypes.objects.filter(is_active=True)
    serializer_class = CourseTypesSerializer


class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Courses objects
    """
    queryset = Course.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return CoursePreviewSerializer
        return CourseDetailSerializer


class PrivilegeViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Privilege objects
    """
    queryset = Privilege.objects.all()
    serializer_class = PrivilegeSerializer


class StudentViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing and creating Student objects
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class CourseReviewViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing and creating CourseReview objects
    """
    queryset = CourseReview.objects.all()
    serializer_class = CourseReviewSerializer


# Blog views/viewsets
class CategoryBlogViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Category objects
    """
    queryset = Category.objects.all()
    serializer_class = CategoryBlogSerializer


class TagViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Tag objects
    """
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class PostViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Post objects
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class CommentViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Comment objects
    """
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


# Sending agreement viewsets
class AgreementViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Agreement objects
    """
    queryset = Agreement.objects.all()
    serializer_class = AgreementSerializer


# Privacy Policy viewsets
class PrivacyPolicyViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing PrivacyPolicy objects
    """
    queryset = PrivacyPolicy.objects.all()
    serializer_class = PrivacyPolicySerializer


# Site Rules viewsets
class SiteRulesViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing SiteRule objects
    """
    queryset = SiteRule.objects.all()
    serializer_class = SiteRuleSerializer


# Denial viewsets
class DenialViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Denial objects
    """
    queryset = Denial.objects.all()
    serializer_class = DenialSerializer
