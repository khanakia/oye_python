from sqlalchemy import Column, ForeignKey, Integer, String, NVARCHAR, Numeric, DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class User(Base):
    __tablename__  = 'users'
    id = Column('id', Integer, primary_key=True)
    username = Column('username', String)
    password = Column('password', String) 