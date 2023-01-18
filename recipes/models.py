from django.db import models
from foodTypes.models import FoodType
from recipeTypes.models import RecipeType
from ingredients.models import Ingredient
from authentification.models import User
from simple_history.models import HistoricalRecords

class Recipe(models.Model):
    name = models.CharField(verbose_name='Имя рецепта', max_length=255)
    photo = models.ImageField(verbose_name='Фото рецепта', upload_to='recipes/photos')
    recipe_type = models.ManyToManyField(verbose_name='Тип рецепта', to=RecipeType, related_name='recipes')
    food_type = models.ManyToManyField(verbose_name='Тип еды', to=FoodType, related_name='recipes')
    description = models.TextField(verbose_name='Описание')
    ingredients = models.ManyToManyField(verbose_name='Ингредиенты', to=Ingredient, related_name='recipes')
    cooking = models.TextField(verbose_name='Готовка')
    history = HistoricalRecords()

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'

class FavouriteRecipe(models.Model):
    user = models.ForeignKey(User, verbose_name='User', on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, verbose_name='Recipe', on_delete=models.CASCADE)
