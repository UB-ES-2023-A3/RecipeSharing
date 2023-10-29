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
