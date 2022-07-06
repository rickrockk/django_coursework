from django.db import models
from recipes.models import Recipe
from authentification.models import User

class RecipeComment(models.Model):
    author = models.ForeignKey(verbose_name='Автор', to=User, on_delete=models.CASCADE)
    recipe_id = models.ForeignKey(verbose_name='ID Рецепта', to=Recipe, on_delete=models.CASCADE)
    text = models.TextField(verbose_name='Текст комментария')

    def __str__(self):
        return self.text

    class Meta:
        verbose_name = 'Комментарий к рецепту'
        verbose_name_plural = 'Комментарии к рецептам'


