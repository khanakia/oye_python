import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from sqlalchemy import engine as engineSqlAchemy
from sqlalchemy.orm import sessionmaker

import sys, os
sys.path.append('../../')

from config import database

Base = declarative_base()

# sqlalchemy.String(1000, convert_unicode=True)

def init():
	global connection, session
	conn = database.connections[database.default]
	connection_string = engineSqlAchemy.url.URL(conn['driver'], username=conn['username'], password=conn['password'], host=conn['host'], port=conn['port'], database=conn['database'], query=conn['query'])
	# print connection_string
	engine = create_engine(connection_string)

	connection = engine.connect()
	session = sessionmaker()
	session.configure(bind=engine)
	session = session()
	Base.metadata.create_all(engine)

def closeConnection():
    connection.close()

if __name__ == '__main__':
	init()