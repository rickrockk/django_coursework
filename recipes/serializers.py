from rest_framework import serializers
from recipes.models import Recipe, FavouriteRecipe
from authentification.serializers import UserSerializer

class RecipeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe
        fields = '__all__'
    def validate(self, data):
        if data['name'] == data['description']:
            raise serializers.ValidationError('Название и описание должны различаться!')
        elif data['name_ru'] == data['description_ru']:
            raise serializers.ValidationError('Название и описание должны различаться!')
        elif data['name_en'] == data['description_en']:
            raise serializers.ValidationError('Название и описание должны различаться!')
        return data

        

class FavouriteRecipeSerializer(serializers.ModelSerializer):
    user_data = UserSerializer(source='user')
    recipe_data = RecipeSerializer(source='recipe')

    class Meta:
        model = FavouriteRecipe
        exclude = ['user', 'recipe']


                