from datetime import datetime

from sqlalchemy import DateTime, Enum
from sqlalchemy.orm import Session
from backend import models, schemas, utils
from typing import List

# TEAMS
# Read all teams
def get_teams(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Team).offset(skip).limit(limit).all()


# Read a team by id
def get_team_by_id(db: Session, team_id: int):
    return db.query(models.Team).filter(models.Team.id == team_id).first()


# Read a team by name
def get_team_by_name(db: Session, team_name: str):
    return db.query(models.Team).filter(models.Team.name == team_name).first()


# Read a team by UniqueConstraint
def get_team_by_uq(db: Session, team_name: str, country: str):
    return db.query(models.Team).filter((models.Team.name == team_name) & (models.Team.country == country)).first()


# Create a team
def create_team(db: Session, team: schemas.TeamCreate):
    db_team = models.Team(name=team.name, country=team.country, description=team.description)
    try:
        db.add(db_team)
        db.commit()
        db.refresh(db_team)
        return db_team
    except:
        db.rollback()
        return {"message": "An error occurred inserting the team."}, 500


# Delete a team by id
def delete_team_by_id(db: Session, team_id: int):
    db_team = db.query(models.Team).filter(models.Team.id == team_id).first()
    try:
        db.delete(db_team)
        db.commit()
        return db_team
    except:
        db.rollback()
        return {"message": "An error occurred deleting the team."}, 500


# Delete a team by name
def delete_team_by_name(db: Session, team_name: str):
    db_team = db.query(models.Team).filter(models.Team.name == team_name).first()
    try:
        db.delete(db_team)
        db.commit()
        return db_team
    except:
        db.rollback()
        return {"message": "An error occurred deleting the team."}, 500


# Update a team by id
def update_team_by_id(db: Session, team_id: int, team: schemas.Team):
    db_team = db.query(models.Team).filter(models.Team.id == team_id).first()
    try:
        db_team.name = team.name
        db_team.country = team.country
        db_team.description = team.description
        db.commit()
        db.refresh(db_team)
        return db_team
    except:
        db.rollback()
        return {"message": "An error occurred updating the team."}, 500


# Update a team by name
def update_team_by_name(db: Session, team_name: str, team: schemas.Team):
    db_team = db.query(models.Team).filter(models.Team.name == team_name).first()
    try:
        db_team.name = team.name
        db_team.country = team.country
        db_team.description = team.description
        db.commit()
        db.refresh(db_team)
        return db_team
    except:
        db.rollback()
        return {"message": "An error occurred deleting the team."}, 500


# Read all matches of a team by its name
def get_team_matches(db: Session, team_name: str):
    db_team = db.query(models.Team).filter(models.Team.name == team_name).first()
    db_match_local = db.query(models.Match).filter(models.Match.local == db_team).all()
    db_match_visitor = db.query(models.Match).filter(models.Match.visitor == db_team).all()
    db_matches = db_match_local + db_match_visitor
    db_matches = sorted(db_matches, key=lambda match: match.id)
    return db_matches


# Read all competitions of a team by its name
def get_team_competitions(db: Session, team_name: str):
    db_team = db.query(models.Team).filter(models.Team.name == team_name).first()
    db_competitions = db.query(models.Competition).filter(
        models.Competition.teams.any(models.Team.id == db_team.id)).all()
    return db_competitions


# COMPETITIONS
# Read all competitions
def get_competitions(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Competition).offset(skip).limit(limit).all()


# Read a competition by id
def get_competition_by_id(db: Session, competition_id: int):
    return db.query(models.Competition).filter(models.Competition.id == competition_id).first()


# Read competitions by name
def get_competition_by_name(db: Session, competition_name: str):
    return db.query(models.Competition).filter(models.Competition.name == competition_name).all()


# Read a competition by UniqueConstraint given its id
def get_competition_by_uq_id(db: Session, competition_id: int, category: str, sport: str):
    return db.query(models.Competition).filter((models.Competition.id == competition_id) &
                                               (models.Competition.category == category) &
                                               (models.Competition.sport == sport)).first()


# Read a competition by UniqueConstraint given its name
def get_competition_by_uq_name(db: Session, competition_name: str, category: Enum, sport: Enum):
    return db.query(models.Competition).filter((models.Competition.name == competition_name) &
                                               (models.Competition.category == category) &
                                               (models.Competition.sport == sport)).first()


# Create a competition
def create_competition(db: Session, competition: schemas.CompetitionCreate):
    db_competition = models.Competition(name=competition.name, category=competition.category.value,
                                        sport=competition.sport.value)
    try:
        db.add(db_competition)
        db.commit()
        db.refresh(db_competition)
        return db_competition
    except:
        db.rollback()
        return {"message": "An error occurred inserting the competitions."}, 500


# Delete a competition
def delete_competition(db: Session, competition_id: int):
    db_competition = db.query(models.Competition).filter(models.Competition.id == competition_id).first()
    try:
        db.delete(db_competition)
        db.commit()
        return db_competition
    except:
        db.rollback()
        return {"message": "An error occurred deleting the competitions."}, 500


# def delete_competition(db: Session, competition_name: str):
#     db_competition = db.query(models.Competition).filter(models.Competition.name == competition_name).first()
#     db.delete(db_competition)
#     db.commit()
#     return db_competition


# Update a competition
def update_competition(db: Session, competition_id: int, competition: schemas.Competition):
    db_competition = db.query(models.Competition).filter(models.Competition.id == competition_id).first()
    try:
        db_competition.name = competition.name
        db_competition.category = competition.category.value
        db_competition.sport = competition.sport.value
        db.commit()
        db.refresh(db_competition)
        return db_competition
    except:
        db.rollback()
        return {"message": "An error occurred updating the competitions."}, 500


# def update_competition(db: Session, competition_name: str, competition: schemas.Competition):
#     db_competition = db.query(models.Competition).filter(models.Competition.name == competition_name).first()
#     db_competition.name = competition.name
#     db_competition.category = competition.category
#     db_competition.sport = competition.sport
#     db.commit()
#     db.refresh(db_competition)
#     return db_competition


# Read competitions matches
def get_competition_matches(db: Session, competition_id: int):
    # return db.query(models.Match).filter(models.Match.competition_id == competition_id).all()
    return (db.query(models.Competition).filter(models.Competition.id == competition_id).first()).matches


# Read competitions teams
def get_competition_teams(db: Session, competition_id: int):
    return (db.query(models.Competition).filter(models.Competition.id == competition_id).first()).teams


# MATCHES
# Read all matches
def get_matches(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Match).offset(skip).limit(limit).all()


# Read a match by id
def get_match_by_id(db: Session, match_id: int):
    return db.query(models.Match).filter(models.Match.id == match_id).first()


# Read a match by UniqueConstraint
def get_match_by_uq(db: Session, local_id: int, visitor_id: int, competition_id: int, date: DateTime):
    return db.query(models.Match).filter((models.Match.local_id == local_id) &
                                         (models.Match.visitor_id == visitor_id) &
                                         (models.Match.competition_id == competition_id) &
                                         (models.Match.date == date)).first()


# Create a match    # CHECK
def create_match(db: Session, match: schemas.MatchCreate):
    db_match = models.Match(date=match.date, price=match.price, competition_id=match.competition.id,
                            local_id=match.local.id, visitor_id=match.visitor.id,
                            total_available_tickets=match.total_available_tickets)
    try:
        db.add(db_match)
        db.commit()
        db.refresh(db_match)
        add_competition_match_info(db=db, match_id=db_match.id, competition_id=match.competition.id)
        return db_match
    except:
        db.rollback()
        return {"message": "An error occurred inserting the matches."}, 500


# Delete a match
def delete_match(db: Session, match_id: int):
    db_match = db.query(models.Match).filter(models.Match.id == match_id).first()
    try:
        db.delete(db_match)
        db.commit()
        return db_match
    except:
        db.rollback()
        return {"message": "An error occurred deleting the matches."}, 500


# Update a match    #CHECK
def update_match(db: Session, match_id: int, match: schemas.Match):
    db_match = db.query(models.Match).filter(models.Match.id == match_id).first()
    try:
        db_match.date = match.date
        db_match.price = match.price
        db_match.local_id = match.local.id
        db_match.visitor_id = match.visitor.id
        db_match.competition_id = match.competition.id
        db_match.total_available_tickets = match.total_available_tickets
        db.commit()
        db.refresh(db_match)
        add_competition_match_info(db=db, match_id=db_match.id, competition_id=match.competition.id)
        return db_match
    except:
        db.rollback()
        return {"message": "An error occurred deleting the matches."}, 500


# Read match teams
def get_match_teams(db: Session, match_id: int):
    db_match = db.query(models.Match).filter(models.Match.id == match_id).first()
    return db_match.local, db_match.visitor


# Read match competition
def get_match_competition(db: Session, match_id: int):
    return (db.query(models.Match).filter(models.Match.id == match_id).first()).competition


# Add the match information to a competition
def add_competition_match_info(db: Session, match_id: int, competition_id: int):
    db_match = db.query(models.Match).filter(models.Match.id == match_id).first()
    db_competition = db.query(models.Competition).filter(models.Competition.id == competition_id).first()
    db_competition.matches.append(db_match)
    db_competition.teams.append(db_match.local)
    db_competition.teams.append(db_match.visitor)
    db.commit()
    db.refresh(db_competition)


# ACCOUNT
# Read all accounts
def get_accounts(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Account).offset(skip).limit(limit).all()


# Read an account by username
def get_account_by_username(db: Session, username: str):
    return db.query(models.Account).filter((models.Account.username == username)).first()

def get_account_by_uq(db: Session, username: str, password: str, is_admin: int, available_money: float):
    db_account = db.query(models.Account).filter((models.Account.username == username)).first()
    coded_password = utils.verify_password(password, db_account.password)
    if not coded_password:
        return None
    return db.query(models.Account).filter((models.Account.username == username) &
                                            (models.Account.is_admin == is_admin) &
                                            (models.Account.available_money == available_money)).first()


# Create an account
def create_account(db: Session, account: dict):
    db_account = models.Account(username=account.username, password=account.password,
                                password_confirmation=account.password_confirmation, email=account.email)
    try:
        db.add(db_account)
        db.commit()
        db.refresh(db_account)
        return db_account
    except:
        db.rollback()
        return {"message": "An error occurred inserting the account."}, 500


# Delete an account
def delete_account(db: Session, username: str):
    db_account = db.query(models.Account).filter(models.Account.username == username).first()
    db_orders = db.query(models.Order).filter(models.Order.username == username).all()
    try:
        for order in db_orders:
            db.delete(order)
        db.delete(db_account)
        db.commit()
        return db_account
    except:
        db.rollback()
        return {"message": "An error occurred deleting the accounts."}, 500


# Update an account
def update_account(db: Session, username: str, account: schemas.Account, user: dict):
    db_account = db.query(models.Account).filter(models.Account.username == username).first()
    db_orders = db.query(models.Order).filter(models.Order.username == username).all()
    try:
        for order in db_orders:
            order.username == user['username']
            db.commit()
            db.refresh(order)

        db_account.username = user['username']
        db_account.password = user['password']
        db_account.is_admin = account.is_admin
        db_account.available_money = account.available_money
        db.commit()
        db.refresh(db_account)
        return db_account
    except:
        db.rollback()
        return {"message": "An error occurred updating the accounts."}, 500


# ORDERS
# Read all orders
def get_orders(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Order).offset(skip).limit(limit).all()


# Read orders by username
def get_orders_by_username(db: Session, username: str):
    return (db.query(models.Account).filter(models.Account.username == username).first()).orders


# Create an order
def create_order(db: Session, order: schemas.OrderCreate):
    db_order = models.Order(match_id=order.match_id, tickets_bought=order.tickets_bought)
    db_match = get_match_by_id(db=db, match_id=order.match_id)
    db_account = get_account_by_username(db=db, username=order.username)
    db_price = db_match.price * order.tickets_bought  # price of the tickets

    db_match.total_available_tickets -= order.tickets_bought
    db_account.available_money -= db_price
    db_account.orders.append(db_order)

    try:
        db.add(db_order)
        db.commit()
        db.refresh(db_order)
        db.refresh(db_match)
        db.refresh(db_account)
        return db_order
    except:
        db.rollback()
        return {"message": "An error occurred inserting the order."}, 500

# RECIPE
# Read all matches
def get_recipes(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Recipe).offset(skip).limit(limit).all()


# Read a match by id
def get_recipe_by_id(db: Session, recipe_id: int):
    return db.query(models.Recipe).filter(models.Recipe.id == recipe_id).first()


# Read a match by UniqueConstraint
def get_recipe_by_uq(db: Session, recipe_type: list, kcal: int, title: str, servings: int, allergens: list,
                     ingredients: list, instructions: str, preparation_time: int, username_id: int):
    return db.query(models.Recipe).filter((models.Recipe.recipe_type == recipe_type) &
                                         (models.Recipe.kcal == kcal) &
                                         (models.Recipe.title == title) &
                                         (models.Recipe.servings == servings) &
                                         (models.Recipe.allergens == allergens) &
                                         (models.Recipe.ingredients == ingredients) &
                                         (models.Recipe.instructions == instructions) &
                                         (models.Recipe.preparation_time == preparation_time) &
                                         (models.Recipe.username_id == username_id)).first()


# Create a match    # CHECK
def create_recipe(db: Session, recipe: schemas.RecipeCreate):
    db_recipe = models.Recipe(
        recipe_type=recipe.recipe_type,
        kcal=recipe.kcal,
        title=recipe.title,
        servings=recipe.servings,
        allergens=recipe.allergens,
        ingredients=recipe.ingredients,
        instructions=recipe.instructions,
        preparation_time=recipe.preparation_time,
        username_id=recipe.username_id
    )
    try:
        db.add(db_recipe)
        db.commit()
        db.refresh(db_recipe)
        return db_recipe
    except Exception as e:
        db.rollback()
        # Devuelve un objeto que cumple con el modelo Recipe
        return {"message": "An error occurred inserting the recipe.", "error": str(e)}, 500

def get_users(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.User).offset(skip).limit(limit).all()


# Read an account by username
def get_user_by_username(db: Session, username: str):
    return db.query(models.User).filter((models.User.username == username)).first()

def get_user_by_uq(db: Session, username: str, password: str, email:str):
    return db.query(models.User).filter((models.User.username == username) |
                                            (models.User.email == email)).first()


def create_user(db: Session, user: dict):
    db_user = models.User(username=user['username'], password=user['password'], email=user['email'])
    try:
        db.add(db_user)
        db.commit()
        db.refresh(db_user)
        return db_user
    except Exception as e:
        db.rollback()
        return {"message": "An error occurred inserting the account.", "error": str(e)}, 500