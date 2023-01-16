from django.contrib import admin
from foodTypes.models import FoodType


class FoodTypeAdmin(admin.ModelAdmin):
    list_display = ('id', 'foodType')
    list_display_links = ('id',)
    search_fields = ('id', 'foodType')

admin.site.register(FoodType, FoodTypeAdmin)
