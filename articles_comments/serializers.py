from rest_framework import serializers
from articles_comments.models import ArticleComment

class ArticleCommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleComment
        fields = '__all__'