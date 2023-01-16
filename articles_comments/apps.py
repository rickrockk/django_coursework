from django.apps import AppConfig


class ArticlesCommentsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'articles_comments'
    verbose_name = "Комментарии к статьям"
