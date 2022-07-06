from django.db import models

class RecipeType(models.Model): 
    recipeType = models.CharField(verbose_name='Тип рецепта', max_length=255)

    def __str__(self):
        return self.recipeType

    class Meta:
        verbose_name = 'Тип рецепта'
        verbose_name_plural = 'Типы рецепта'
