from django.db import models
from simple_history.models import HistoricalRecords

class Ingredient(models.Model):
    name = models.CharField(verbose_name='Название', max_length=255)
    count = models.IntegerField(verbose_name='Количество')
    history = HistoricalRecords()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name='Ингредиент'
        verbose_name_plural='Ингредиенты'
