# Generated by Django 3.2 on 2023-01-19 21:00

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import simple_history.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('recipes', '0005_rename_recipe_favouriterecipe_recipe'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='description_r',
            field=models.TextField(null=True, verbose_name='Описание'),
        ),
        migrations.AddField(
            model_name='recipe',
            name='description_u',
            field=models.TextField(null=True, verbose_name='Описание'),
        ),
        migrations.AddField(
            model_name='recipe',
            name='name_r',
            field=models.CharField(max_length=255, null=True, verbose_name='Имя рецепта'),
        ),
        migrations.AddField(
            model_name='recipe',
            name='name_u',
            field=models.CharField(max_length=255, null=True, verbose_name='Имя рецепта'),
        ),
        migrations.CreateModel(
            name='HistoricalRecipe',
            fields=[
                ('id', models.BigIntegerField(auto_created=True, blank=True, db_index=True, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Имя рецепта')),
                ('photo', models.TextField(max_length=100, verbose_name='Фото рецепта')),
                ('description', models.TextField(verbose_name='Описание')),
                ('cooking', models.TextField(verbose_name='Готовка')),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField(db_index=True)),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'historical Рецепт',
                'verbose_name_plural': 'historical Рецепты',
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': ('history_date', 'history_id'),
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
    ]
