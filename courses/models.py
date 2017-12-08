from django.utils.translation import ugettext_lazy as _
from django.contrib.contenttypes.fields import GenericRelation
from django.db import models
from django.contrib.auth.models import User
from rating.models import Rating


def upload_path(instance, filename):
    """
    Path where avatars are stored
    :param instance:
    :param filename:
    :return:
    """
    return "courses/{0}/{1}".format(instance, filename)


class Teacher(models.Model):
    first_name = models.CharField(max_length=50, verbose_name=_('First name'))
    last_name = models.CharField(max_length=60, verbose_name=_('Last name'))
    email = models.EmailField(max_length=100, verbose_name=_('Email'))
    avatar = models.FileField(upload_to=upload_path, blank=True, null=True, verbose_name=_('Avatar'))
    age = models.DateField(verbose_name=_('Age'))
    description = models.TextField(blank=True, null=True, verbose_name=_('About teacher'))

    class Meta:
        verbose_name = _('Teacher')
        verbose_name_plural = _('Teachers')

    def __str__(self):
        return str(self.first_name) + " " + str(self.last_name)


class Discount(models.Model):
    title = models.CharField(max_length=100, verbose_name=_('Title'))
    slug = models.SlugField()
    percents = models.IntegerField(verbose_name=_('Percents'))
    from_date = models.DateField(verbose_name=_('From'))
    till_date = models.DateField(verbose_name=_('Till'))
    author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL, verbose_name=_('Author'))
    created_at = models.DateTimeField(auto_now_add=True, verbose_name=_('Created at'))

    class Meta:
        verbose_name = _('Discount')
        verbose_name_plural = _('Discounts')

    def __str__(self):
        return str(self.title) + ": " + str(self.percents) + "%"


class CourseTypes(models.Model):
    title = models.CharField(max_length=60, verbose_name=_('Title'))
    is_active = models.BooleanField(verbose_name=_('Is course type active?'))

    class Meta:
        verbose_name = _('Course type')
        verbose_name_plural = _('Course types')

    def __str__(self):
        return str(self.title) + " course type"


class Course(models.Model):
    AVAILABLE = True
    BUSY = False
    CONSULT_TIME = (
        (AVAILABLE, _("AVAILABLE")),
        (BUSY, _("BUSY")),
    )
    title = models.CharField(max_length=200, unique=True, verbose_name=_('Title'))
    slug = models.SlugField(unique=True)
    course_picture = models.FileField(upload_to=upload_path, blank=True, verbose_name=_('Course picture'))
    course_type = models.ForeignKey(CourseTypes, null=True, on_delete=models.SET_NULL, verbose_name=_('Course type'))
    discount = models.ForeignKey(Discount, blank=True, null=True, on_delete=models.SET_NULL, verbose_name=_('Discount'))
    teachers = models.ManyToManyField(Teacher, verbose_name=_('Teachers'))
    places = models.IntegerField(verbose_name=_('Places to course'))
    free_places = models.PositiveIntegerField(blank=True, null=True, verbose_name=_('Free places'))
    description = models.TextField(verbose_name=_('About the course'))
    price = models.IntegerField(verbose_name=_('Price'))
    is_active = models.BooleanField(verbose_name=_('Is course active?'))
    consulting_time = models.CharField(max_length=254, verbose_name=_('Consulting time'), null=True, blank=True)
    consulting_time_availability_on_this_week = models.BooleanField(choices=CONSULT_TIME, default=BUSY, verbose_name=_('Consulting time availability on this week'))
    couching_timing = models.CharField(max_length=254, verbose_name=_('Couching timing'), null=True, blank=True)
    couching_consult_time = models.CharField(max_length=254, verbose_name=_('Couching consult time'), null=True, blank=True)
    couching_time_availability_on_this_month = models.BooleanField(choices=CONSULT_TIME, default=BUSY, verbose_name=_('Couching time availability on this month'))
    meta_title = models.CharField(max_length=250, null=True, verbose_name=_('SEO/Meta title'))
    meta_description = models.TextField(null=True, verbose_name=_('SEO/Meta description'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))
    ratings = GenericRelation(Rating)

    class Meta:
        ordering = ['-date_added']
        verbose_name = _('Course')
        verbose_name_plural = _('Courses')

    def __str__(self):
        return str(self.title)


class Privilege(models.Model):
    FAST_START = 'F_S'
    ALL_INCLUSIVE = 'A_I'
    PREMIUM = 'P'

    TYPES = (
        (FAST_START, 'Fast start'),
        (ALL_INCLUSIVE, 'All-inclusive'),
        (PREMIUM, 'Premium')
    )
    type = models.CharField(max_length=50, choices=TYPES, default=FAST_START, verbose_name=_('Type'))
    title = models.CharField(max_length=50, default=_('Fast start'), verbose_name=_('Title'))
    courses = models.ManyToManyField(Course, verbose_name=_('Courses'))
    price = models.IntegerField(verbose_name=_('Price'))
    description = models.TextField(verbose_name=_('Description'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))

    class Meta:
        verbose_name = _('Privilege')
        verbose_name_plural = _('Privileges')

    def __str__(self):
        return str(self.type)


class Student(models.Model):
    name = models.CharField(max_length=50, default='Name', verbose_name=_('Name'))
    email = models.EmailField(max_length=100, verbose_name='Email')
    phone = models.CharField(max_length=20, verbose_name=_('Phone'))
    skype = models.CharField(max_length=40, blank=True, null=True, verbose_name=_('Skype'))
    courses = models.ForeignKey(Course, null=True, on_delete=models.SET_NULL, verbose_name=_('Courses'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))

    class Meta:
        ordering = ['-date_added']
        verbose_name = _('Student')
        verbose_name_plural = _('Students')

    def __str__(self):
        return str(self.name) + " " + str(self.email)


class CourseReview(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE, verbose_name=_('Course'))
    first_name = models.CharField(max_length=50, verbose_name=_('First name'))
    last_name = models.CharField(max_length=60, verbose_name=_('Last name'))
    # avatar = models.FileField(upload_to=upload_path, blank=True, null=True, verbose_name=_('Avatar'))
    avatar = models.URLField(max_length=1000, blank=True, null=True, verbose_name=_('Avatar (link to google drive, etc.)'))
    link_to_fb = models.URLField(max_length=200, blank=True, null=True, verbose_name=_('Link to Facebook'))
    link_to_inst = models.URLField(max_length=200, blank=True, null=True, verbose_name=_('Link to Instagram'))
    link_to_linkedin = models.URLField(max_length=200, blank=True, null=True, verbose_name=_('Link to LinkedIn'))
    link_to_vk = models.URLField(max_length=200, blank=True, null=True, verbose_name=_('Link to Vkontakte'))
    review = models.TextField(verbose_name=_('Review'))
    # video = models.FileField(upload_to=upload_path, blank=True, null=True, verbose_name=_('Video review'))
    video = models.URLField(blank=True, null=True, verbose_name=_('Video review (link to google drive, etc.)'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))

    class Meta:
        ordering = ['-date_added']
        verbose_name = _('Course review')
        verbose_name_plural = _('Courses reviews')

    def __str__(self):
        return "Review to " + str(self.course) + " course from " + str(self.first_name) + " " + str(self.last_name)
