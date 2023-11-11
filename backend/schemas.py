import enum
from backend.models import sports_list, categories_list
from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime


class TeamBase(BaseModel):
    name: str
    country: str
    description: Optional[str] = None


class TeamCreate(TeamBase):
    pass


class Team(TeamBase):
    id: int

    class Config:
        orm_mode = True


class CompetitionBase(BaseModel):
    name: str
    category: enum.Enum('category', dict(zip(categories_list, categories_list)))
    sport: enum.Enum('sport', dict(zip(sports_list, sports_list)))


class CompetitionCreate(CompetitionBase):
    pass


class Competition(CompetitionBase):
    id: int
    teams: list[Team] = []

    class Config:
        orm_mode = True


class MatchBase(BaseModel):
    date: datetime
    price: float
    local: Team
    visitor: Team
    competition: Competition
    total_available_tickets: Optional[int] = 500


class MatchCreate(MatchBase):
    pass


class Match(MatchBase):
    id: int

    class Config:
        orm_mode = True


class OrderBase(BaseModel):
    username: str
    match_id: int
    tickets_bought: int


class OrderCreate(OrderBase):
    pass


class Order(OrderBase):
    id: int

    class Config:
        orm_mode = True


class AccountBase(BaseModel):
    username: str = Field(..., description="username")
    email: str = Field(..., description="email")
    password: str = Field(..., min_length=8, description="user password")
    password_confirmation: str = Field(..., min_length=8, description="user password confirmation")
    is_admin: int


class AccountCreate(AccountBase):
    pass


class Account(AccountBase):
    class Config:
        orm_mode = True

class RecipeBase(BaseModel):
    title: str
    ingredients: List[str]
    instructions: str
    preparation_time: int = 0
    servings: int = 0
    kcal: int = 0
    recipe_type: List[str]
    allergens: List[str]
    username_id: str

class RecipeCreate(RecipeBase):
    pass

class Recipe(RecipeBase):
    id: int
    creation_date: datetime
    rating_average: float
    rating_amount: int
    rating_list: List[int]

    class Config:
        orm_mode = True

class UserBase(BaseModel):
    username: str
    email: str
    password: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    is_admin: int
    own_recipes: List[int]
    saved_recipes: List[int]
    class Config:
        orm_mode = True



class TokenSchema(BaseModel):
    access_token: str
    refresh_token: str


class TokenPayload(BaseModel):
    sub: str = None
    exp: int = None

class SystemAccount(Account):
    password: str