from rest_framework.viewsets import ModelViewSet
from articles_comments.serializers import ArticleCommentSerializer
from articles_comments.models import ArticleComment

class ArticleCommentViewSet(ModelViewSet):
    queryset = ArticleComment.objects.all()
    serializer_class = ArticleCommentSerializer
