from rest_framework.generics import ListAPIView
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.pagination import PageNumberPagination

from about_us.models import AboutModel
from courses.models import Teacher, Discount, CourseTypes, Course, Privilege, Student, CourseReview
from blog.models import Category, Tag, Post, Comment
from sending_agreement.models import Agreement
from privacy_policy.models import PrivacyPolicy
from site_rules.models import SiteRule
from denial.models import Denial
from .serializers import AboutUsSerializer, TeacherSerializer, DiscountSerializer, CourseTypesSerializer,\
    CourseSerializer, PrivilegeSerializer, StudentSerializer, CourseReviewSerializer, CategoryBlogSerializer,\
    TagSerializer, PostSerializer, CommentSerializer, AgreementSerializer, PrivacyPolicySerializer,\
    SiteRuleSerializer, DenialSerializer


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
    queryset = Course.objects.filter(is_active=True)
    serializer_class = CourseSerializer


class PrivilegeViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Privilege objects
    """
    queryset = Privilege.objects.all()
    serializer_class = PrivilegeSerializer


class StudentCreateListViewSet(mixins.CreateModelMixin,
                               mixins.UpdateModelMixin,
                               mixins.ListModelMixin,
                               viewsets.GenericViewSet):
    """
    API endpoint for listing, creating and updating Student objects
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

    def perform_create(self, serializer):
        student = serializer.save()

        # setting course
        try:
            course = str(self.request.data['course'])
        except:
            course = ""
        if course:
            course = Course.objects.get(id=course)
            student.courses.add(course)

        email = str(self.request.data['email'])
        phone = str(self.request.data['phone'])
        skype = str(self.request.data['skype'])

        # checking student
        if Student.objects.get(email=email, phone=phone):
            # if not Student.objects.get(email=email, phone=phone, courses)
            self.perform_update(student)
        else:
            if Student.objects.get(skype__exact=skype):
                return "This skype already exists!"
            else:
                student.skype = skype

            student.save()

    def perform_update(self, serializer):
        student = serializer.save()

        try:
            course = str(self.request.data['course'])
        except:
            course = ""
        if course:
            course = Course.objects.get(id=course)
            student.courses.add(course)
        student.save()


class CourseReviewViewSet(mixins.CreateModelMixin,
                          mixins.ListModelMixin,
                          viewsets.GenericViewSet):
    """
    API endpoint for listing and creating CourseReview objects
    """
    queryset = CourseReview.objects.all()
    serializer_class = CourseReviewSerializer

    def perform_create(self, serializer):
        review = serializer.save()

        try:
            course = str(self.request.data['course'])
        except:
            course = ""
        if course:
            course = Course.objects.get(id=course)
            review.course.add(course)
        review.save()


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


class PostListView(ListAPIView):
    """
    API endpoint for listing Post objects
    """
    queryset = Post.objects.filter(is_published=True)
    serializer_class = PostSerializer
    pagination_class = PageNumberPagination

    def get_queryset(self):
        query = super(PostListView, self).get_queryset()

        category = self.kwargs.get('category')
        if category:
            category = Category.objects.get(slug=category)
            return query.filter(category=category)

        return query


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
