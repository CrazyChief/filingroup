from rest_framework import viewsets

from courses.models import Teacher, Discount, Course, CourseTypes, Student, CourseReview
from blog.models import Category, Tag, Post, Comment
from .serializers import TeacherSerializer, DiscountSerializer, CoursePreviewSerializer,\
    CourseDetailSerializer, CourseTypesSerializer, StudentSerializer, CourseReviewSerializer,\
    CategoryBlogSerializer, TagSerializer, PostSerializer, CommentSerializer


# Courses views/viewsets
class TeacherViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Teacher objects
    """
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer


class CourseViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing Courses objects
    """
    queryset = Course.objects.all()

    def get_serializer_class(self):
        if self.action == 'list':
            return CoursePreviewSerializer
        return CourseDetailSerializer


class CourseTypesViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint for listing CourseTypes objects
    """
    queryset = CourseTypes.objects.filter(is_active=True)
    serializer_class = CourseTypesSerializer


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

