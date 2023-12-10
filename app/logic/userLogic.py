import json
from app.models import CustomUser, Recipe


def get_user_by_username(username):
    try:
        user = CustomUser.objects.get(username=username)
        return {'user': user.toJson()}
    except CustomUser.DoesNotExist:
        return {'error': 'User not found.'}


def modify_user_profile(request, username):
    body = json.loads(request.body.decode('utf-8'))
    user = CustomUser.objects.get(username=username)
    if user is None:
        return {'error': 'User not found.'}
    else:
        if "username" in body:
            user.username = body.get("username")
        if "email" in body:
            user.email = body.get("email")
        if "password" in body:
            user.password = body.get("password")
        if "profile_image" in body:
            user.profile_image = body.get("profile_image")
        if "list_favorite_recipes" in body:
            user.list_favorite_recipes = body.get("list_favorite_recipes")

        user.save()


def add_favorite_logic(request):
    body = json.loads(request.body.decode('utf-8'))
    user_id = body.get("user_id")
    recipe_id = body.get("recipe_id")
    try:
        recipe = Recipe.objects.get(id=recipe_id)
        user = CustomUser.objects.get(username=user_id)

        if recipe is None:
            return {'error': 'Recipe not found.'}
        if user is None:
            return {'error': 'User not found.'}

        list_favorite_recipes = user.list_favorite_recipes

        # Convertir las claves a cadenas
        str_recipe_id = str(recipe.id)

        if str_recipe_id in list_favorite_recipes:
            # Recipe is already in favorites, remove it
            del list_favorite_recipes[str_recipe_id]
            user.save()
            favorite_recipes = [Recipe.objects.get(id=int(recipe_id)).toJson()
                                for recipe_id in list_favorite_recipes.keys()]

            return {'message': 'Recipe removed from favorites.',
                    'list_favorite_recipes': favorite_recipes}
        else:
            # Recipe is not in favorites, add it
            list_favorite_recipes[str_recipe_id] = recipe.toJson()
            user.save()
            favorite_recipes = [Recipe.objects.get(id=int(recipe_id)).toJson()
                                for recipe_id in list_favorite_recipes.keys()]

            return {'message': 'Recipe added to favorites.',
                    'list_favorite_recipes': favorite_recipes}

    except Recipe.DoesNotExist:
        return {'error': 'Recipe not found.'}
    except CustomUser.DoesNotExist:
        return {'error': 'User not found.'}
