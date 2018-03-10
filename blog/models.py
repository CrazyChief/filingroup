from django.utils.translation import ugettext_lazy as _
from django.contrib.contenttypes.fields import GenericRelation
from django.conf import settings
from django.db import models
from django.contrib.auth.models import User
from rating.models import Rating


def upload_path(instance, filename):
    """
    Path to files
    :param instance:
    :param filename:
    :return:
    """
    return "blog/{0}".format(filename)


class Category(models.Model):
    title = models.CharField(max_length=50, verbose_name=_('Title'))
    slug = models.SlugField()
    is_active = models.BooleanField(default=False, verbose_name=_('Is category active?'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))

    class Meta:
        ordering = ['title']
        verbose_name = _('Category')
        verbose_name_plural = _('Categories')

    def __str__(self):
        return str(self.title)


class Tag(models.Model):
    title = models.CharField(max_length=40, verbose_name=_('title'))
    slug = models.SlugField()
    is_active = models.BooleanField(default=False, verbose_name=_('Is tag active?'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))

    class Meta:
        ordering = ['title']
        verbose_name = _('Tag')
        verbose_name_plural = _('Tags')

    def __str__(self):
        return str(self.title)


class Post(models.Model):
    PUBLISHED = True
    DRAFT = False

    TYPES = (
        (PUBLISHED, _('Published')),
        (DRAFT, _('Draft')),
    )

    title = models.CharField(max_length=200, unique=True, verbose_name=_('Title'))
    slug = models.SlugField()
    cover_picture = models.ImageField(blank=True, upload_to=upload_path, verbose_name=_('Cover picture'))
    category = models.ForeignKey(Category, on_delete=models.CASCADE, verbose_name=_('Category'))
    is_published = models.BooleanField(choices=TYPES, default=DRAFT, verbose_name=_('Is published?'))
    announce = models.TextField(verbose_name=_('Announce'))
    content = models.TextField(verbose_name=_('Content'))
    tags = models.ManyToManyField(Tag, verbose_name=_('Tag'))
    author = models.ForeignKey(settings.AUTH_USER_MODEL, default=1, verbose_name=_('Author'))
    meta_title = models.CharField(max_length=250, null=True, verbose_name=_('SEO/Meta title'))
    meta_description = models.TextField(null=True, verbose_name=_('SEO/Meta description'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))
    ratings = GenericRelation(Rating, auto_created=True)

    class Meta:
        ordering = ['-date_added']
        verbose_name = _('Post')
        verbose_name_plural = _('Posts')

    def __str__(self):
        return str(self.title)

    def is_post_published(self):
        return self.is_published

    # def save(self, force_insert=False, force_update=False, using=None,
    #          update_fields=None):
    #     if not self.id:
    #         self.ratings.auto_created

    is_post_published.admin_order_field = 'is_published'
    is_post_published.boolean = True
    is_post_published.short_description = _('Is published?')


class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, verbose_name=_('Post'))
    name = models.CharField(max_length=100, verbose_name=_('Author'))
    email = models.EmailField(max_length=254, verbose_name=_('Email'))
    text = models.TextField(verbose_name=_('Comment'))
    parent = models.ForeignKey('self', null=True, blank=True, verbose_name=_('Parent comment'))
    user = models.ForeignKey(User, null=True, blank=True, verbose_name=_('User'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date of creation'))

    class Meta:
        verbose_name = _('Comment')
        verbose_name_plural = _('Comments')

    def __str__(self):
        return str(self.name) + " for post: " + str(self.post)

    def children(self):
        return Comment.objects.filter(parent=self)

    @property
    def is_parent(self):
        if self.parent is not None:
            return False
        return True



