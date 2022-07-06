# Generated by Django 4.0.5 on 2022-06-21 14:20

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('recipes', '0002_remove_recipe_ingredients_recipe_ingredients'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='RecipeComment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('text', models.TextField(verbose_name='Текст комментария')),
                ('author', models.ManyToManyField(to=settings.AUTH_USER_MODEL, verbose_name='Автор')),
                ('recipe_id', models.ManyToManyField(to='recipes.recipe', verbose_name='ID Рецепта')),
            ],
            options={
                'verbose_name': 'Комментарий к рецепту',
                'verbose_name_plural': 'Комментарии к рецепту',
            },
        ),
    ]
