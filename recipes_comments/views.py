from rest_framework.viewsets import ModelViewSet
from recipes_comments.serializers import RecipeCommentSerializer
from recipes_comments.models import RecipeComment

class RecipeCommentViewSet(ModelViewSet):
    queryset = RecipeComment.objects.all()
    serializer_class = RecipeCommentSerializer
