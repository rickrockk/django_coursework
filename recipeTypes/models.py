from django.db import models
from simple_history.models import HistoricalRecords

class RecipeType(models.Model): 
    recipeType = models.CharField(verbose_name='Тип рецепта', max_length=255)
    history = HistoricalRecords();

    def __str__(self):
        return self.recipeType

    class Meta:
        verbose_name = 'Тип рецепта'
        verbose_name_plural = 'Типы рецепта'
