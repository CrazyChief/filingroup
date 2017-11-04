from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()
router.register(r'courses', CourseViewSet)  #   route for Courses(list/detail)
router.register(r'reviews', CourseReviewList)   #   route for reviews from students
router.register(r'teachers', TeacherList)   #   route for teachers of course
router.register(r'ctypes', CourseTypesList) #   route for course types (basic/all-inclusive/premium)


urlpatterns = router.urls
