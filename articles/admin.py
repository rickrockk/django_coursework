from django.contrib import admin
from articles.models import Article

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('id', 'title')
    list_display_links = ('id', 'title')
    search_fields = ('id', 'title', 'description')


admin.site.register(Article, ArticleAdmin)
