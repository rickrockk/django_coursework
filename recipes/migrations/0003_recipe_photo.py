# Generated by Django 4.0.5 on 2022-06-23 18:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0002_remove_recipe_ingredients_recipe_ingredients'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='photo',
            field=models.ImageField(default='', upload_to='recipes/photos', verbose_name='Фото рецепта'),
            preserve_default=False,
        ),
    ]
