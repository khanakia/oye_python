import os
import sys
import pymysql
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker


Base = declarative_base()

class DbClass:
    def __init__(self, connectionString):
        engine = create_engine(connectionString)
        self.connection = engine.connect()

        session = sessionmaker()
        session.configure(bind=engine)
        self.session = session
        Base.metadata.create_all(engine)

    def hello(self):
        print "hello"

    def closeConnection(self):
        self.connection.close()