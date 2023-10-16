from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers
from django.http import Http404, HttpResponseNotAllowed
from .models import Recipe
import json
from django.views.decorators.csrf import csrf_exempt

def get_all_recipes(request):
    query_set = Recipe.objects.all()
    data = serializers.serialize("json", query_set)
    return HttpResponse(data)

def get_recipe_by_id(request, recipe_id):
    try:
        query_set = Recipe.objects.filter(pk=recipe_id)
        data = serializers.serialize("json", query_set)
    except Recipe.DoesNotExist:
        raise Http404("Restaurant does not exist")
        data = serializers.serialize("json", query_set)
    return HttpResponse(data)

@csrf_exempt
def create_new_recipe(request):
    if request.method == 'POST':
        body = json.loads(request.body.decode('utf-8'))
        
        new_title = body.get("title")
        new_ingredients = body.get("ingredients")
        new_instructions = body.get("instructions")
        new_preparation_time = body.get("preparation_time")
        new_servings = body.get("servings")
        new_kcal = body.get("kcal")
        new_username_id = body.get("username_id")

        new_recipe = Recipe(title=new_title,
                            ingredients=new_ingredients,
                            instructions=new_instructions,
                            preparation_time=new_preparation_time,
                            servings=new_servings,
                            kcal=new_kcal,
                            username_id=new_username_id)
        new_recipe.save()
        return HttpResponse(status=200)
    else:
        raise HttpResponseNotAllowed("Method is not supported")
    
