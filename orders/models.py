from django.utils.translation import ugettext_lazy as _
from django.db import models

from courses.models import Student, CourseTypes, Course, Discount


class Order(models.Model):
    student = models.ForeignKey(Student, on_delete=models.DO_NOTHING, verbose_name=_('Student'))
    course = models.ForeignKey(Course, on_delete=models.DO_NOTHING, verbose_name=_('Course'))

    billing_first_name = models.CharField(max_length=50, verbose_name=_('First name'))
    billing_last_name = models.CharField(max_length=60, verbose_name=_('Last name'))
    billing_phone = models.CharField(max_length=20, verbose_name=_('Phone'))
    billing_email = models.EmailField(max_length=254, verbose_name=_('Email'))

    discount = models.ForeignKey(Discount, null=True, blank=True, on_delete=models.DO_NOTHING, verbose_name=_('Discount'))
    order_sum = models.IntegerField(verbose_name=_('Sum'))
    pay_status = models.BooleanField(verbose_name=_('Pay status'))
    date_added = models.DateTimeField(auto_now_add=True, verbose_name=_('Date added'))

    class Meta:
        ordering = ['-date_added']
        verbose_name = _('Order')
        verbose_name_plural = _('Orders')

    def billing_full_name(self):
        return "{} {}".format(self.billing_first_name, self.billing_last_name)

    billing_full_name.short_description = "Billing full name"

    def order(self):
        return "Order {}".format(self.pk)

    order.short_description = "Order"

    def o_sum(self):
        return self.order_sum

    o_sum.admin_order_field = "order_sum"
    o_sum.short_description = "Sum"

    def __str__(self):
        return "Order {} for: {}/{}".format(self.pk, self.student, self.course)
