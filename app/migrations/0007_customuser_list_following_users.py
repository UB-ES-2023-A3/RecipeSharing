# Generated by Django 4.2.6 on 2023-11-29 21:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0006_merge_20231121_1749'),
    ]

    operations = [
        migrations.AddField(
            model_name='customuser',
            name='list_following_users',
            field=models.JSONField(default=dict),
        ),
    ]
