# Import the Recipe model from the app.models module
from app.models import Recipe


# Function for creating a new recipe
def recipe_logic(title, ingredients, instructions, prep_time, servings, kcal, username_id, recipe_type, allergens):
    # Create a new Recipe object with the provided data
    new_recipe = Recipe(title=title,
                        ingredients=ingredients,
                        instructions=instructions,
                        preparation_time=prep_time,
                        servings=servings,
                        kcal=kcal,
                        username_id=username_id,
                        recipe_type=recipe_type,
                        allergens=allergens)

    # Save the new recipe to the database
    new_recipe.save()

    # Return a success message indicating that the recipe was created
    return {'message': 'Recipe created.'}


# Function to retrieve all recipes
def get_all_recipes():
    # Retrieve all Recipe objects from the database
    recipes = Recipe.objects.all()  # This gets all Recipe objects, adjust your query as needed

    # Create a list of JSON representations of the recipes
    recipe_list = [recipe.toJson() for recipe in recipes]

    # Return a dictionary containing the list of recipes
    return {'recipes': recipe_list}
