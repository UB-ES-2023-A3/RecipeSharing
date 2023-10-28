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
    
@csrf_exempt
def update_recipe(request, recipe_id):
    if request.method == 'PUT':
        try:
            # Obtener la receta existente por su ID
            existing_recipe = Recipe.objects.get(id=recipe_id)

            # Parsear los datos JSON de la solicitud
            body = json.loads(request.body.decode('utf-8'))
            
            # Actualizar los campos de la receta con los nuevos valores, manejando el caso en que sean nulos
            existing_recipe.title = body.get("title", existing_recipe.title)
            existing_recipe.ingredients = body.get("ingredients", existing_recipe.ingredients)
            existing_recipe.instructions = body.get("instructions", existing_recipe.instructions)
            existing_recipe.preparation_time = body.get("preparation_time", existing_recipe.preparation_time)
            existing_recipe.servings = body.get("servings", existing_recipe.servings)
            existing_recipe.kcal = body.get("kcal", existing_recipe.kcal)
            existing_recipe.username_id = body.get("username_id", existing_recipe.username_id)


            # Guardar la receta actualizada en la base de datos
            existing_recipe.save()
            return HttpResponse(status=200)

        except Recipe.DoesNotExist:
            # Si la receta no existe, devolver un error 404
            return HttpResponseNotFound("Recipe not found")
    
    else:
        # Si el método HTTP no es compatible, devolver un error 405
        return HttpResponseNotAllowed("Method is not supported")


    
def delete_recipe(request, recipe_id):
    if request.method == 'DELETE':
        '''
        # Analiza el cuerpo de la solicitud JSON
        body = json.loads(request.body.decode('utf-8'))
        recipe_id = body.get("recipe_id")'''

        try:
            # Obtén la receta por su ID
            recipe = Recipe.objects.get(id=recipe_id)
            # Elimina la receta
            recipe.delete()
            return HttpResponse(status=204) # Devuelve una respuesta sin contenido (204 No Content) para indicar éxito en la eliminación.
        except Recipe.DoesNotExist:
            return Http404("Recipe not found")
    else:
        return HttpResponseNotAllowed("Method is not supported")