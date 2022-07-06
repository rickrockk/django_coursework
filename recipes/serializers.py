from rest_framework import serializers
from recipes.models import Recipe, FavouriteRecipe
from authentification.serializers import UserSerializer

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'

class FavouriteRecipeSerializer(serializers.ModelSerializer):
    user_data = UserSerializer(source='user')
    recipe_data = RecipeSerializer(source='recipe')

    class Meta:
        model = FavouriteRecipe
        exclude = ['user', 'recipe']