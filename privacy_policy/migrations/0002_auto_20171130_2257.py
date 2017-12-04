# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2017-11-30 22:57
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('privacy_policy', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='privacypolicy',
            name='meta_description',
            field=models.TextField(null=True, verbose_name='SEO/Meta description'),
        ),
        migrations.AddField(
            model_name='privacypolicy',
            name='meta_title',
            field=models.CharField(max_length=250, null=True, verbose_name='SEO/Meta title'),
        ),
    ]