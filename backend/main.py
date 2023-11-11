from fastapi import Depends, FastAPI, HTTPException, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse
from fastapi.responses import RedirectResponse
from typing import Annotated
from backend import models, repository, schemas
from backend.utils import verify_password, create_access_token, create_refresh_token, get_hashed_password
from backend.database import SessionLocal, engine
from fastapi.middleware.cors import CORSMiddleware
from backend.dependencies import get_current_user

# Create DB with the defined models
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Dependency to get a DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


app.mount("/static", StaticFiles(directory="frontend/static/dist"), name="static")

templates = Jinja2Templates(directory="frontend/public")


# Matches page
@app.get("/")
async def serve_index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


# Login page
@app.get("/login")
async def serve_index(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


# TEAMS
# Read all teams
@app.get("/teams/", response_model=list[schemas.Team])
def read_teams(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return repository.get_teams(db=db, skip=skip, limit=limit)


# Read a team by id
@app.get("/teams/{team_id:int}", response_model=schemas.Team)
def read_team(team_id: int, db: Session = Depends(get_db)):
    db_team = repository.get_team_by_id(db=db, team_id=team_id)
    if not db_team:
        raise HTTPException(status_code=404, detail="Team not found")
    return db_team


# Read a team by name
@app.get("/teams/{team_name}", response_model=schemas.Team)
def read_team(team_name: str, db: Session = Depends(get_db)):
    db_team = repository.get_team_by_name(db=db, team_name=team_name)
    if not db_team:
        raise HTTPException(status_code=404, detail="Team not found")
    return db_team


# Create a team
@app.post("/teams/", response_model=schemas.Team)
def create_team(team: schemas.TeamCreate, db: Session = Depends(get_db)):
    db_team = repository.get_team_by_name(db=db, team_name=team.name)
    if db_team:
        raise HTTPException(status_code=400, detail="Team already Exists, Use put for updating")
    else:
        return repository.create_team(db=db, team=team)


# Delete a team by id
@app.delete("/teams/{team_id:int}", response_model=dict)
def delete_team(team_id: int, db: Session = Depends(get_db)):
    db_team = repository.delete_team_by_id(db=db, team_id=team_id)
    if not db_team:
        raise HTTPException(status_code=404, detail="Team not found")
    else:
        return {"detail": "Team deleted"}


# Delete a team by name
@app.delete("/teams/{team_name}", response_model=dict)
def delete_team(team_name: str, db: Session = Depends(get_db)):
    db_team = repository.delete_team_by_name(db=db, team_name=team_name)
    if not db_team:
        raise HTTPException(status_code=404, detail="Team not found")
    else:
        return {"detail": "Team deleted"}


# Update a team by id
@app.put("/teams/{team_id:int}", response_model=schemas.Team)
def update_team(team_id: int, team: schemas.TeamCreate, db: Session = Depends(get_db)):
    db_new_team = repository.get_team_by_uq(db=db, team_name=team.name, country=team.country)
    if db_new_team:
        raise HTTPException(status_code=404, detail="Team already exists")
    else:
        db_team = repository.get_team_by_id(db=db, team_id=team_id)
        if db_team:
            return repository.update_team_by_id(db=db, team_id=team_id, team=team)
        else:
            return repository.create_team(db=db, team=team)


# Update a team by name
@app.put("/teams/{team_name}", response_model=schemas.Team)
def update_team(team_name: str, team: schemas.TeamCreate, db: Session = Depends(get_db)):
    db_new_team = repository.get_team_by_uq(db=db, team_name=team.name, country=team.country)
    if db_new_team:
        raise HTTPException(status_code=404, detail="Team already exists")
    else:
        db_team = repository.get_team_by_name(db=db, team_name=team_name)
        if db_team:
            return repository.update_team_by_name(db=db, team_name=team_name, team=team)
        else:
            return repository.create_team(db=db, team=team)


# Read all matches of a team by its name
@app.get("/teams/{team_name}/matches", response_model=list[schemas.Match])
def get_team_matches(team_name: str, db: Session = Depends(get_db)):
    db_team = repository.get_team_by_name(db=db, team_name=team_name)
    if db_team:
        return repository.get_team_matches(db=db, team_name=team_name)
    else:
        raise HTTPException(status_code=404, detail="Team not found")


# Read all competitions of a team by its name
@app.get("/teams/{team_name}/competitions", response_model=list[schemas.Competition])
def get_team_competitions(team_name: str, db: Session = Depends(get_db)):
    db_team = repository.get_team_by_name(db=db, team_name=team_name)
    if db_team:
        return repository.get_team_competitions(db=db, team_name=team_name)
    else:
        raise HTTPException(status_code=404, detail="Team not found")


# COMPETITIONS
# Read all competitions
@app.get("/competitions/", response_model=list[schemas.Competition])
def read_competitions(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return repository.get_competitions(db=db, skip=skip, limit=limit)


# Read a competition by id
@app.get("/competitions/{competition_id:int}", response_model=schemas.Competition)
def read_competition(competition_id: int, db: Session = Depends(get_db)):
    competition = repository.get_competition_by_id(db=db, competition_id=competition_id)
    if not competition:
        raise HTTPException(status_code=404, detail="Competition not found")
    return competition


# Read competitions by name
@app.get("/competitions/{competition_name}", response_model=list[schemas.Competition])
def read_competition(competition_name: str, db: Session = Depends(get_db)):
    competition = repository.get_competition_by_name(db=db, competition_name=competition_name)
    if not competition:
        raise HTTPException(status_code=404, detail="Competition not found")
    return competition


# Create a competition
@app.post("/competitions/", response_model=schemas.Competition)
def create_competition(competition: schemas.CompetitionCreate, db: Session = Depends(get_db)):
    db_competition = repository.get_competition_by_uq_name(db=db, competition_name=competition.name,
                                                           category=competition.category.value,
                                                           sport=competition.sport.value)
    if db_competition:
        raise HTTPException(status_code=400, detail="Competition already Exists, Use put for updating")
    else:
        return repository.create_competition(db=db, competition=competition)


# Delete a competition by id
@app.delete("/competitions/{competition_id:int}", response_model=dict)
def delete_competition(competition_id: int, db: Session = Depends(get_db)):
    db_competition = repository.delete_competition(db=db, competition_id=competition_id)
    if not db_competition:
        raise HTTPException(status_code=404, detail="Competition not found")
    else:
        return {"detail": "Competition deleted"}


# @app.delete("/competitions/{competition_name}", response_model=dict)
# def delete_competition(competition_id: int, db: Session = Depends(get_db)):
#     db_competition = repository.delete_competition(db=db, competition_id=competition_id)
#     if not db_competition:
#         raise HTTPException(status_code=404, detail="Competition not found")
#     else:
#         return {"detail": "Competition deleted"}


# Update a competition by id
@app.put("/competitions/{competition_id:int}", response_model=schemas.Competition)
def update_competition(competition_id: int, competition: schemas.CompetitionCreate, db: Session = Depends(get_db)):
    db_new_competition = repository.get_competition_by_uq_name(db=db, competition_name=competition.name,
                                                               category=competition.category.value,
                                                               sport=competition.sport.value)
    if db_new_competition:
        raise HTTPException(status_code=404, detail="Competition already exists")
    else:
        db_competition = repository.get_competition_by_id(db=db, competition_id=competition_id)
        if db_competition:
            return repository.update_competition(db=db, competition_id=competition_id, competition=competition)
        else:
            return create_competition(db=db, competition=competition)


# Read competitions matches
@app.get("/competitions/{competition_name}/matches", response_model=dict[int, list[schemas.Match]])
def get_competition_matches(competition_name: str, db: Session = Depends(get_db)):
    db_competitions = repository.get_competition_by_name(db=db, competition_name=competition_name)
    dic = {}
    if not db_competitions:
        raise HTTPException("Competitions not found")
    for competition in db_competitions:
        if competition:
            db_matches = repository.get_competition_matches(db=db, competition_id=competition.id)
            dic[competition.id] = db_matches
    return dic


# Read competitions teams
@app.get("/competitions/{competition_name}/teams", response_model=dict[int, list[schemas.Team]])
def get_competition_teams(competition_name: str, db: Session = Depends(get_db)):
    db_competitions = repository.get_competition_by_name(db=db, competition_name=competition_name)
    dic = {}
    if not db_competitions:
        raise HTTPException("Competitions not found")
    for competition in db_competitions:
        if competition:
            db_teams = repository.get_competition_teams(db=db, competition_id=competition.id)
            dic[competition.id] = db_teams
    return dic


# MATCHES
# Read all matches
@app.get("/matches/", response_model=list[schemas.Match])
def read_matches(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return repository.get_matches(db, skip=skip, limit=limit)


# Read a match by id
@app.get("/matches/{match_id:int}", response_model=schemas.Match)
def read_match(match_id: int, db: Session = Depends(get_db)):
    db_match = repository.get_match_by_id(db, match_id=match_id)
    if not db_match:
        raise HTTPException(status_code=404, detail="Match not found")
    return db_match


# Create a match
@app.post("/matches/", response_model=schemas.Match)
def create_match(match: schemas.MatchCreate, db: Session = Depends(get_db)):
    db_match = repository.get_match_by_uq(db, local_id=match.local.id, visitor_id=match.visitor.id,
                                          competition_id=match.competition.id, date=match.date)
    if db_match:
        raise HTTPException(status_code=400, detail="Match already Exists, Use put for updating")
    else:
        return repository.create_match(db=db, match=match)


# Delete a match by id
@app.delete("/matches/{match_id:int}", response_model=dict)
def delete_match(match_id: int, db: Session = Depends(get_db)):
    db_match = repository.delete_match(db=db, match_id=match_id)
    if not db_match:
        raise HTTPException(status_code=404, detail="Match not found")
    else:
        return {"detail": "Match deleted"}


# Update a match by id
@app.put("/matches/{match_id:int}", response_model=schemas.Match)
def update_match(match_id: int, match: schemas.MatchCreate, db: Session = Depends(get_db)):
    db_new_local = repository.get_team_by_name(db=db, team_name=match.local.name)
    db_new_visitor = repository.get_team_by_name(db=db, team_name=match.visitor.name)
    # If local is equals to visitor makes no sense
    if db_new_local == db_new_visitor:
        raise HTTPException(status_code=404, detail="Local and Visitor cannot be the same")
    db_new_competition = repository.get_competition_by_uq_name(db=db, competition_name=match.competition.name,
                                                               category=match.competition.category.value,
                                                               sport=match.competition.sport.value)
    # If local, visitor or competition do not exist, we can create a match
    if db_new_local:
        if db_new_visitor:
            if db_new_competition:
                db_match = repository.get_match_by_id(db=db, match_id=match_id)
                if db_match:
                    return repository.update_match(db=db, match_id=match_id, match=match)
                else:
                    db_new_match = repository.get_match_by_uq(db=db, local_id=match.local.id,
                                                              visitor_id=match.visitor.id,
                                                              competition_id=match.competition.id, date=match.date)
                    if db_new_match:
                        raise HTTPException(status_code=404, detail="Match already exists")
                    else:
                        return repository.create_match(db=db, match=match)
            else:
                raise HTTPException(status_code=404, detail="Competition does not exist")
        else:
            raise HTTPException(status_code=404, detail="Visitor does not exist")
    raise HTTPException(status_code=404, detail="Local does not exist")


# Read match teams
@app.get("/matches/{match_id:int}/teams", response_model=list[schemas.Team])
def get_match_teams(match_id: int, db: Session = Depends(get_db)):
    db_match = repository.get_match_by_id(db=db, match_id=match_id)
    if db_match:
        return repository.get_match_teams(db=db, match_id=match_id)
    else:
        raise HTTPException(status_code=404, detail="Match not found")


# Read match competition
@app.get("/matches/{match_id:int}/competition", response_model=schemas.Competition)
def get_match_competition(match_id: int, db: Session = Depends(get_db)):
    db_match = repository.get_match_by_id(db=db, match_id=match_id)
    if db_match:
        return repository.get_match_competition(db=db, match_id=match_id)
    else:
        raise HTTPException(status_code=404, detail="Match not found")


# ACCOUNTS
# Read all orders
@app.get("/accounts/", response_model=list[schemas.Account])
def get_accounts(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return repository.get_accounts(db=db, skip=skip, limit=limit)


@app.get('/account', summary='Get details of currently logged in user', response_model=schemas.Account)
async def get_me(user: schemas.Account = Depends(get_current_user)):
    return user


# Read an account
@app.get("/accounts/{username}", response_model=schemas.Account)
def get_account(username: str, db: Session = Depends(get_db)):
    db_account = repository.get_account_by_username(db=db, username=username)
    if not db_account:
        raise HTTPException(status_code=404, detail="Match not found")
    return db_account


# Create an account
@app.post("/accounts/", summary="Create new user", response_model=schemas.Account)
async def create_account(account: schemas.AccountCreate, db: Session = Depends(get_db)):
    db_account = repository.get_account_by_username(db=db, username=account.username)
    if db_account:
        raise HTTPException(status_code=400, detail="Account already Exists")
    else:
        return repository.create_account(db=db, account=account)


# Delete an account
@app.delete("/accounts/{username}", response_model=dict)
def delete_account(username: str, db: Session = Depends(get_db)):
    db_account = repository.delete_account(db=db, username=username)
    if not db_account:
        raise HTTPException(status_code=404, detail="Account not found")
    else:
        return {"detail": "Account deleted"}


# Update an account
@app.put("/accounts/{username}", response_model=schemas.Account)
def update_account(username: str, account: schemas.AccountCreate, db: Session = Depends(get_db)):
    db_new_account = repository.get_account_by_username(db=db, username=account.username)
    if db_new_account:
        raise HTTPException(status_code=400, detail="Account already exists")
    else:
        db_account = repository.get_account_by_username(db=db, username=username)
        user = {
            'username': account.username,
            'password': get_hashed_password(account.password)
        }
        if db_account:
            return repository.update_account(db=db, username=username, account=account, user=user)
        else:
            return repository.create_account(db=db, user=user)


# ORDERS
# Read all orders
@app.get("/orders/", response_model=list[schemas.Order])
def get_orders(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return repository.get_orders(db=db, skip=skip, limit=limit)


# Read orders by username
@app.get("/orders/{username}", response_model=list[schemas.Order])
def get_order_by_username(username: str, db: Session = Depends(get_db)):
    db_account = repository.get_account_by_username(db=db, username=username)
    if db_account:
        return repository.get_orders_by_username(db=db, username=username)
    else:
        raise HTTPException(status_code=400, detail="Account not found")


# Create an order
@app.post("/orders/{username}", response_model=schemas.Order)
def create_order(order: schemas.OrderCreate, db: Session = Depends(get_db)):
    db_account = repository.get_account_by_username(db=db, username=order.username)
    db_match = repository.get_match_by_id(db=db, match_id=order.match_id)
    db_price = order.tickets_bought * db_match.price

    if db_account:
        if db_match:
            if db_account.available_money >= db_price:
                if order.tickets_bought <= db_match.total_available_tickets:
                    return repository.create_order(db=db, order=order)
                else:
                    raise HTTPException(status_code=400, detail="No tickets available")
            else:
                raise HTTPException(status_code=400, detail="Not enough money on the account")
        else:
            raise HTTPException(status_code=400, detail="Match does not exist")
    raise HTTPException(status_code=400, detail="Account does not exist")


# LOGIN
# Do login
@app.post("/login/", summary="Create access and refresh tokens for user", response_model=schemas.TokenSchema)
async def login(form_data: Annotated[OAuth2PasswordRequestForm, Depends()], db: Session = Depends(get_db)):
    username = form_data.username
    password = form_data.password
    db_account = repository.get_user_by_username(db=db, username=username)
    if not db_account:
        raise HTTPException(status_code=400, detail="Account not found")
    else:
        coded_password = verify_password(password, db_account.password)
        if not coded_password:
            raise HTTPException(status_code=400, detail="Incorrect password")
        else:
            return {
                "access_token": create_access_token(username),
                "refresh_token": create_refresh_token(username)
            }


# RECIPES
# Read all matches
@app.get("/recipes/", response_model=list[schemas.Recipe])
def read_recipes(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return repository.get_recipes(db, skip=skip, limit=limit)


# Read a match by id
@app.get("/recipes/{recipe_id:int}", response_model=schemas.Recipe)
def read_recipe(recipe_id: int, db: Session = Depends(get_db)):
    db_recipe = repository.get_recipe_by_id(db, recipe_id=recipe_id)
    if not db_recipe:
        raise HTTPException(status_code=404, detail="Match not found")
    return db_recipe


# Create a match
@app.post("/recipe/", response_model=schemas.Recipe)
def create_recipe(recipe: schemas.RecipeCreate, db: Session = Depends(get_db)):
    db_recipe = repository.get_recipe_by_uq(db, recipe_type=recipe.recipe_type, kcal=recipe.kcal, title=recipe.title,
                                            servings=recipe.servings, allergens=recipe.allergens,
                                            ingredients=recipe.ingredients,
                                            instructions=recipe.instructions, preparation_time=recipe.preparation_time,
                                            username_id=recipe.username_id)

    if db_recipe:
        raise HTTPException(status_code=400, detail="Recipe already Exists, Use put for updating")
    else:
        return repository.create_recipe(db=db, recipe=recipe)


@app.post("/user/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = repository.get_user_by_uq(db, username=user.username, password=user.password, email=user.email)
    if db_user:
        return JSONResponse({'error': 'User already exists'}, status_code=400)
    else:
        newUser = {
            'username': user.username,
            'password': get_hashed_password(user.password),
            'email': user.email
        }
        return repository.create_user(db=db, user=newUser)


@app.get("/users/", response_model=list[schemas.User])
def read_users(skip: int = 0, limit: int = 10, db: Session = Depends(get_db)):
    return repository.get_users(db, skip=skip, limit=limit)
