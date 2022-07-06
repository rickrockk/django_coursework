from django.db import models
from articles.models import Article
from authentification.models import User

class ArticleComment(models.Model):
    author = models.ForeignKey(verbose_name='Автор', to=User, on_delete=models.CASCADE)
    article_id = models.ForeignKey(verbose_name='ID Статьи', to=Article,on_delete=models.CASCADE)
    text = models.TextField(verbose_name='Текст комментария')

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = 'Комментарий к статье'
        verbose_name_plural = 'Комментарии к статьям'