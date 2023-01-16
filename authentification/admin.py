from django.contrib import admin
from authentification.models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ('nickname', 'email', 'is_active', 'is_staff', 'is_superuser')
    list_display_links = ('nickname',)
    search_fields = ('email', 'nickname')

admin.site.register(User, UserAdmin)