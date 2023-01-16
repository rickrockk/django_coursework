from django.apps import AppConfig


class RecipesCommentsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'recipes_comments'
    verbose_name = "Комментарии к рецептам"