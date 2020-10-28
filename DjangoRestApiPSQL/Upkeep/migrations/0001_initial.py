# Generated by Django 3.1.2 on 2020-10-28 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bike',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('brand', models.CharField(default='', max_length=25)),
                ('model', models.CharField(default='', max_length=50)),
                ('maintenance', models.CharField(default='', max_length=300)),
            ],
        ),
    ]
