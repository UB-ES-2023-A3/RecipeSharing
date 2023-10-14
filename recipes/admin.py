from django.contrib import admin
from .models import Recipe

class RecipeAdmin(admin.ModelAdmin):
    fieldsets = [
        ('Recipe', {'fields': ['title', 'author', 'description', 'ingredients', 'directions']}),
        ('Date information', {'fields': ['date']}),
    ]
    list_display = ('title', 'author', 'description', 'ingredients', 'directions', 'date')

admin.site.register(Recipe, RecipeAdmin)
