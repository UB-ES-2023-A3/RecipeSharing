from django.contrib import admin
from .models import Recipe


class RecipeAdmin(admin.ModelAdmin):
    fieldsets = [
        (None, {'fields': ['title']}),
        (None, {'fields': ['ingredients']}),
        (None, {'fields': ['instructions']}),
        (None, {'fields': ['preparation_time']}),
        (None, {'fields': ['servings']}),
        (None, {'fields': ['kcal']}),
        (None, {'fields': ['username_id']}),
        (None, {'fields': ['creation_date']}),
        (None, {'fields': ['recipe_type']}),
        (None, {'fields': ['allergens']})

    ]
    list_display = (
        'title', 'ingredients', 'instructions', 'preparation_time', 'servings', 'kcal', 'username_id', 'creation_date', 'recipe_type', 'allergens')


admin.site.register(Recipe, RecipeAdmin)