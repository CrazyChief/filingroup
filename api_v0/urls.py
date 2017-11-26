from django.conf.urls import url

from rest_framework.routers import DefaultRouter
from .views import *


router = DefaultRouter()

#   about_us routes
router.register(r'aboutus', AboutUsViewSet)

#   courses routes
# router.register(r'courses', CourseViewSet)  #   route for Courses(list/detail)
router.register(r'privileges', PrivilegeViewSet)
router.register(r'reviews', CourseReviewViewSet)   #   route for reviews from students
router.register(r'teachers', TeacherViewSet)   #   route for teachers of course
router.register(r'ctypes', CourseTypesViewSet) #   route for course types (basic/all-inclusive/premium)
router.register(r'students', StudentCreateListViewSet)

#   blog routes
router.register(r'categories', CategoryBlogViewSet) #   route for blog categories
router.register(r'tags', TagViewSet)    #   route for blog tags
# router.register(r'posts', PostViewSet)  #   route for blog posts
router.register(r'comments', CommentViewSet)    #   route for blog comments

#   agreement
router.register(r'agreements', AgreementViewSet)

#   privacy policy
router.register(r'pps', PrivacyPolicyViewSet)

#   site rules
router.register(r'siterules', SiteRulesViewSet)

#   denial
router.register(r'denials', DenialViewSet)

urlpatterns = router.urls

urlpatterns += [
    url(r'^posts/$', PostListView.as_view(), name='post_list'),
    url(r'^posts/(?P<slug>[^\.]+)/$', PostDetailView.as_view(), name='post_detail'),
    # List posts filtered by tag
    url(r'^category/(?P<category>[^\.]+)/$', PostListView.as_view()),
    # Adding an user access
    url(r'^accesses/new/$', AccessViewSet.as_view(), name='add_access'),
    # Course urls
    url(r'^courses/$', CourseListView.as_view(), name='course_list'),
    url(r'^courses/(?P<slug>[^\.]+)/$', CourseDetailView.as_view(), name='course_detail')
]
