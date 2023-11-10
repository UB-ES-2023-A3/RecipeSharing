import datetime

from sqlalchemy import Boolean, MetaData, Column, ForeignKey, Integer, String, Date, Float, Enum, UniqueConstraint, \
    Table, DateTime, Text, JSON, ARRAY
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from backend.database import Base

categories_list = ("Senior", "Junior")
sports_list = ("Volleyball", "Football", "Basketball", "Futsal")

teams_in_competitions = Table("teams_in_competitions", Base.metadata,
                              Column("id", Integer, primary_key=True),
                              Column("team_id", Integer, ForeignKey("teams.id")),
                              Column("competition_id", Integer, ForeignKey("competitions.id")))


class Team(Base):
    __tablename__ = 'teams'  # This is table name

    id = Column(Integer, primary_key=True)
    name = Column(String(30), unique=True, nullable=False, index=True)
    country = Column(String(30), nullable=False)
    description = Column(String(100))


class Competition(Base):
    __tablename__ = 'competitions'  # This is table name
    __table_args__ = (UniqueConstraint('name', 'category', 'sport'),)

    id = Column(Integer, primary_key=True)
    name = Column(String(30), nullable=False)
    category = Column(Enum(*categories_list), nullable=False)
    sport = Column(Enum(*sports_list), nullable=False)
    teams = relationship("Team", secondary=teams_in_competitions, backref="competitions")
    matches = relationship("Match", back_populates="competition")


class Match(Base):
    __tablename__ = 'matches'  # This is table name
    __table_args__ = (UniqueConstraint('local_id', 'visitor_id', 'competition_id', 'date'),)

    id = Column(Integer, primary_key=True)
    date = Column(DateTime, nullable=False)
    price = Column(Float, nullable=False)
    total_available_tickets = Column(Integer)
    competition_id = Column(Integer, ForeignKey("competitions.id"), nullable=False)
    competition = relationship("Competition", back_populates="matches")

    local_id = Column(Integer, ForeignKey("teams.id"), nullable=False)
    visitor_id = Column(Integer, ForeignKey("teams.id"), nullable=False)
    local = relationship("Team", foreign_keys=local_id)
    visitor = relationship("Team", foreign_keys=visitor_id)


class Account(Base):
    __tablename__ = 'accounts'

    username = Column(String(30), primary_key=True, unique=True, nullable=False)
    email = Column(String(), primary_key=True, unique=True, nullable=False)
    password = Column(String(), nullable=False)
    password_confirmation = Column(String(), nullable=False)
    # 0 not admin/ 1 is admin
    is_admin = Column(Integer, nullable=False)

    def __init__(self, username, email, password, password_confirmation, is_admin=0):
        self.username = username
        self.email = email
        self.is_admin = is_admin
        self.password = password
        self.password_confirmation = password_confirmation


class Recipe(Base):
    __tablename__ = 'recipes'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    ingredients = Column(JSON)  # Use JSON type for a list
    instructions = Column(Text)
    preparation_time = Column(Integer, default=0)
    servings = Column(Integer, default=0)
    kcal = Column(Integer, default=0)
    recipe_type = Column(JSON)  # Use JSON type for a list
    allergens = Column(JSON)  # Use JSON type for a list
    username_id = Column(String)
    creation_date = Column(Date, default=datetime.datetime.now())
    rating_average = Column(Float, default=0)
    rating_amount = Column(Integer, default=0)
    rating_list = Column(Integer, default=0)




class Order(Base):
    __tablename__ = 'orders'

    id = Column(Integer, primary_key=True)
    username = Column(String(30), ForeignKey('accounts.username'), nullable=False)
    match_id = Column(Integer, nullable=False)
    tickets_bought = Column(Integer, nullable=False)

    def __init__(self, match_id, tickets_bought):
        self.match_id = match_id
        self.tickets_bought = tickets_bought
