from django.contrib import admin
from articles_comments.models import ArticleComment

class ArticleCommentAdmin(admin.ModelAdmin):
    list_display = ('article_id', 'author', 'text')
    list_display_links = ('article_id',)
    search_fields = ('article_id', 'author', 'text')
    list_filter = ('article_id', 'author')

admin.site.register(ArticleComment, ArticleCommentAdmin)
