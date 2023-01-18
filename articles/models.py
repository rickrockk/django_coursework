from django.db import models
from simple_history.models import HistoricalRecords

class Article(models.Model):
    title = models.CharField(verbose_name='Заголовок статьи', max_length=255)
    description = models.TextField(verbose_name='Описание статьи', max_length=255)
    text = models.TextField(verbose_name='Текст статьи')
    history = HistoricalRecords()

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Статья'
        verbose_name_plural = 'Статьи'
