from rest_framework.viewsets import ModelViewSet
from articles.serializers import ArticleSerializer
from articles.models import Article
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend

class ArticleViewSet(ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter)
    search_fields = ('id', 'title', 'description', 'text')
