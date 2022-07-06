from rest_framework import serializers
from recipes_comments.models import RecipeComment

class RecipeCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeComment
        fields = '__all__'