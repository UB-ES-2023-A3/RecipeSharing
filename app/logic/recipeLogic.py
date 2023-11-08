import json
from app.models import Recipe


# Recipe logic
def recipe_logic(title, ingredients, instructions, prep_time, servings, kcal, username_id, recipe_type, allergens, request):
    new_recipe = Recipe(title=title,
                        ingredients=ingredients,
                        instructions=instructions,
                        preparation_time=prep_time,
                        servings=servings,
                        kcal=kcal,
                        username_id=username_id,
                        recipe_type=recipe_type,
                        allergens=allergens)
    new_recipe.save()
    return {'message': 'Recipe created.'}

def add_rating_logic(request):

    body = json.loads(request.body.decode('utf-8'))
    user_id = body.get("user_id")
    recipe_id = body.get("recipe_id")
    rating = body.get("rating")

    recipe = Recipe.objects.get(id=recipe_id)

    if recipe is None:
        return {'error': 'Recipe not found.'}    
    
    if user_id in recipe.rating_list:
        previous_rating = recipe.rating_list[user_id]
        recipe.rating_list.remove(user_id)
        recipe.rating_list[user_id: rating]
        recipe.rating_average = recipe.rating_amount - (previous_rating / recipe.rating_amount) + (rating / recipe.rating_amount)
        recipe.save()
        return {'message': 'Rating updated.',
                'rating_average': recipe.rating_average,
                'rating_amount': recipe.rating_amount}
    else:
        recipe.rating_list[user_id: rating]
        recipe.rating_amount += 1
        recipe.rating_average = recipe.rating_amount + (rating / recipe.rating_amount)
        recipe.save()
        return {'message': 'Rating added.',
                'rating_average': recipe.rating_average,
                'rating_amount': recipe.rating_amount}

def get_all_recipes():
    recipes = Recipe.objects.all()  # Esto obtiene todos los objetos Recipe, ajusta tu consulta según sea necesario
    recipe_list = [recipe.toJson() for recipe in recipes]
    return {'recipes': recipe_list}

def get_recipes_main():
    recipes_rating = Recipe.objects.order_by("-rating_average")
    recipes_rating_list = [recipe.toJson() for recipe in recipes_rating]
    recipes_recent = Recipe.objects.order_by("-creation_date")
    recipes_recent_list = [recipe.toJson() for recipe in recipes_recent]
    return {'recipes_rating': recipes_rating_list, 'recipes_recent': recipes_recent_list}


def get_list_recipes_by_query(query):
    if query == "rate":
        recipes = Recipe.objects.order_by("-rating_average")
        recipes_list = [recipe.toJson() for recipe in recipes]
        return {'recipes': recipes_list}
    elif query == "recent":
        recipes = Recipe.objects.order_by("-creation_date")
        recipes_list = [recipe.toJson() for recipe in recipes]
        return {'recipes': recipes_list}
    else:
        return {'error': 'Query not valid.'}