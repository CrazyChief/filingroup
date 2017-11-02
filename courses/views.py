from rest_framework import generics

from .models import Teacher, Discount, Course, CourseTypes, Student, CourseReview
from .serializers import TeacherSerializer, DiscountSerializer, CourseSerializer, CourseTypesSerializer, StudentSerializer, CourseReviewSerializer


class TeacherList(generics.ListAPIView):
    """
    API endpoint for listing Teacher objects
    """
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class CourseList(generics.ListAPIView):
    """
    API endpoint for listing Course objects
    """
    queryset = Course.objects.filter(is_active=True)
    serializer_class = CourseSerializer


class CourseTypesList(generics.ListAPIView):
    """
    API endpoint for listing CourseTypes objects
    """
    queryset = CourseTypes.objects.filter(is_active=True)
    serializer_class = CourseTypesSerializer


class StudentList(generics.ListCreateAPIView):
    """
    API endpoint for listing and creating Student objects
    """
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class CourseReviewList(generics.ListCreateAPIView):
    """
    API endpoint for listing and creating CourseReview objects
    """
    queryset = CourseReview.objects.all()
    serializer_class = CourseReviewSerializer
