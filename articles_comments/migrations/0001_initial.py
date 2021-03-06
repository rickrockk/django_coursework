# Generated by Django 4.0.5 on 2022-06-21 14:11

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ArticleComment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(verbose_name='Текст комментария')),
                ('article_id', models.ManyToManyField(to='articles.article', verbose_name='ID Статьи')),
                ('author_id', models.ManyToManyField(to=settings.AUTH_USER_MODEL, verbose_name='ID Автора')),
            ],
            options={
                'verbose_name': 'Комментарий к статье',
                'verbose_name_plural': 'Комментарии к статье',
            },
        ),
    ]
