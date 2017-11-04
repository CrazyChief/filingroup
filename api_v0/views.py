from rest_framework import generics, viewsets

from courses.models import Teacher, Discount, Course, CourseTypes, Student, CourseReview
from .serializers import TeacherSerializer, DiscountSerializer, CoursePreviewSerializer, CourseDetailSerializer, CourseTypesSerializer, StudentSerializer, CourseReviewSerializer


class TeacherList(generics.ListAPIView):
    """
    API endpoint for listing Teacher objects
    """
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Course.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return CoursePreviewSerializer
        return CourseDetailSerializer


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
