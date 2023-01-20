# Generated by Django 3.2 on 2023-01-19 21:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import simple_history.models


class Migration(migrations.Migration):

    dependencies = [
        ('authentification', '0003_alter_user_is_active_alter_user_is_staff_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='HistoricalUser',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(db_index=True, max_length=255, verbose_name='Адрес эл. почты')),
                ('nickname', models.CharField(max_length=255, verbose_name='Никнейм')),
                ('photo', models.TextField(max_length=100, verbose_name='Фото')),
                ('bio', models.TextField(verbose_name='Биография')),
                ('is_active', models.BooleanField(default=False, verbose_name='Активирован')),
                ('is_staff', models.BooleanField(default=False, verbose_name='Модерация')),
                ('is_superuser', models.BooleanField(default=False, verbose_name='Администратор')),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField(db_index=True)),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'historical Пользователь',
                'verbose_name_plural': 'historical Пользователи',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': ('history_date', 'history_id'),
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
    ]
