from django.contrib import admin
from .models import Order


class OrderAdmin(admin.ModelAdmin):
    list_display = (
        'order',
        'billing_full_name',
        'o_sum',
        'pay_status',
        'date_added',
    )
    list_filter = [
        'order_sum',
        'pay_status',
        'date_added',
    ]


admin.site.register(Order, OrderAdmin)
