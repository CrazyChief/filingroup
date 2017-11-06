from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()

#   about_us routes
router.register(r'aboutus', AboutUsViewSet)

#   courses routes
router.register(r'courses', CourseViewSet)  #   route for Courses(list/detail)
router.register(r'reviews', CourseReviewViewSet)   #   route for reviews from students
router.register(r'teachers', TeacherViewSet)   #   route for teachers of course
router.register(r'ctypes', CourseTypesViewSet) #   route for course types (basic/all-inclusive/premium)

#   blog routes
router.register(r'categories', CategoryBlogViewSet) #   route for blog categories
router.register(r'tags', TagViewSet)    #   route for blog tags
router.register(r'posts', PostViewSet)  #   route for blog posts
router.register(r'comments', CommentViewSet)    #   route for blog comments


urlpatterns = router.urls
