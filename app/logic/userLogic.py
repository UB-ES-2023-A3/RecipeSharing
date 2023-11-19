import json
from app.models import CustomUser, Recipe

def get_user_by_id(id):
    try:
        user = CustomUser.objects.get(id=id)
        return {'user': user.toJson()}
    except CustomUser.DoesNotExist:
        return {'error': 'User not found.'}

def add_favorite_logic(request):
    body = json.loads(request.body.decode('utf-8'))
    user_id = body.get("user_id")
    recipe_id = body.get("recipe_id")

    recipe = Recipe.objects.get(id=recipe_id)
    user = CustomUser.objects.get(id=user_id)

    if recipe is None:
        return {'error': 'Recipe not found.'}
    if user is None:
        return {'error': 'User not found.'}
    else:
        if recipe_id in user.list_favorite_recipes:
            user.list_favorite_recipes.remove(recipe_id)
            user.save()
            favorite_recipes = [Recipe.objects.get(id=recipe_id).toJson() for recipe_id in user.list_favorite_recipes]

            return {'message': 'Favorite list updated.',
                    'list_favorite_recipes': favorite_recipes}
        else:
            user.list_favorite_recipes[user_id] = recipe.toJson()
            user.save()
            favorite_recipes = [Recipe.objects.get(id=recipe_id).toJson() for recipe_id in user.list_favorite_recipes]

            return {'message': 'Favorite list updated.',
                    'list_favorite_recipes': favorite_recipes}
