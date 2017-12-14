from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.pagination import PageNumberPagination

import json
import requests
from django.conf import settings

from about_us.models import AboutModel
from courses.models import (Teacher, Discount, CourseTypes, Course, Privilege,
                            Student, CourseReview)
from blog.models import Category, Tag, Post, Comment
from sending_agreement.models import Agreement
from privacy_policy.models import PrivacyPolicy
from site_rules.models import SiteRule
from denial.models import Denial
from take_access.models import Access
from .serializers import (AboutUsSerializer, TeacherSerializer, DiscountSerializer,
                          CourseTypesSerializer, CourseSerializer, PrivilegeSerializer,
                          StudentSerializer, CourseReviewSerializer, CategoryBlogSerializer,
                          TagSerializer, PostSerializer, CommentSerializer, AgreementSerializer,
                          PrivacyPolicySerializer, SiteRuleSerializer, DenialSerializer,
                          AccessSerializer, RatingSerializer)

# Take access viewset
class AccessViewSet(CreateAPIView):
    queryset = Access.objects.all()
    serializer_class = AccessSerializer

    def perform_create(self, serializer):
        access = serializer.save()

        name = str(self.request.data['name'])
        email = str(self.request.data['email'])
        try:
            phone = str(self.request.data['phone'])
        except:
            phone = ''
        if phone is not '':
            data = {
                'name': name,
                'email': email,
                "dayOfCycle": '0',
                'campaign': {
                    'campaignId': settings.GR_VIDEO_TOKEN
                },
                'customFieldValues': [
                    {
                        "customFieldId": "OmdJ2",
                        "value": [
                            phone
                        ]
                    }
                ],
            }
        else:
            data = {
                'name': name,
                'email': email,
                "dayOfCycle": '0',
                'campaign': {
                    'campaignId': settings.GR_VIDEO_TOKEN
                }
            }
        url = 'https://api.getresponse.com/v3/contacts/'
        # print(url)
        headers = {
            'X-Auth-Token': 'api-key {}'.format(settings.GR_API_KEY),
            'Content-Type': 'application/json'
        }
        # print(data)
        # print(headers)
        requests.post(url, data=json.dumps(data), headers=headers)
        # print(r.status_code)
        # print(r.text)
        access.save()


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


class CourseListView(ListAPIView):
    """
    API endpoint for listing Courses objects
    """
    queryset = Course.objects.filter(is_active=True)
    serializer_class = CourseSerializer


class CourseDetailView(RetrieveUpdateDestroyAPIView):
    """
    API endpoint for displaying single Course objects
    """
    queryset = Course.objects.filter(is_active=True)
    serializer_class = CourseSerializer
    lookup_field = 'slug'


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

        name = str(self.request.data['name'])
        email = str(self.request.data['email'])
        phone = str(self.request.data['phone'])
        skype = str(self.request.data['skype'])

        try:
            privilege = str(self.request.data['privilegeId'])
        except:
            privilege = ""

        url = 'https://api.getresponse.com/v3/contacts/'
        headers = {
            'X-Auth-Token': 'api-key {}'.format(settings.GR_API_KEY),
            'Content-Type': 'application/json'
        }
        data = {
            'name': name,
            'email': email,
            "dayOfCycle": '0',
            'campaign': {
                'campaignId': settings.GR_VIDEO_TOKEN
            },
            "customFieldValues": [
                {
                    "customFieldId": "l67O2",
                    "value": [
                        skype
                    ]
                },
                {
                    "customFieldId": "OmdJ2",
                    "value": [
                        phone
                    ]
                }
            ],
        }

        # setting course
        try:
            courses = str(self.request.data['courses'])
        except:
            courses = ""
        if courses:
            courses = Course.objects.get(id=courses)
            student.courses = courses

        if privilege == '':
            if courses.course_type.title == 'Коучинг':
                data['campaign']['campaignId'] = settings.GR_CONSULT_WITHOUT_PAY_TOKEN
            elif courses.course_type.title == 'Консультация':
                data['campaign']['campaignId'] = settings.GR_CONSULT_WITHOUT_PAY_TOKEN
            elif courses.course_type.title == 'Курс':
                data['campaign']['campaignId'] = settings.GR_COURSE_START_WITHOUT_PAY_TOKEN
            else:
                pass
        else:
            q = Privilege.objects.get(pk=privilege)
            if q.type == 'F_S':
                data['campaign']['campaignId'] = settings.GR_COURSE_START_WITHOUT_PAY_TOKEN
            elif q.type == 'A_I':
                data['campaign']['campaignId'] = settings.GR_COURSE_ALL_WITHOUT_PAY_TOKEN
            elif q.type == 'P':
                data['campaign']['campaignId'] = settings.GR_COURSE_VIP_WITHOUT_PAY_TOKEN
            else:
                pass

        requests.post(url, data=json.dumps(data), headers=headers)

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
            review.course = course
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


class PostDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.filter(is_published=True)
    serializer_class = PostSerializer
    lookup_field = 'slug'


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
