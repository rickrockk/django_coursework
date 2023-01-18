from django.contrib import admin
from articles_comments.models import ArticleComment
from import_export.admin import ImportExportMixin

class ArticleCommentAdmin(ImportExportMixin, admin.ModelAdmin):
    list_display = ('article_id', 'author', 'text')
    list_display_links = ('article_id',)
    search_fields = ('article_id', 'author', 'text')
    list_filter = ('article_id', 'author')

admin.site.register(ArticleComment, ArticleCommentAdmin)
