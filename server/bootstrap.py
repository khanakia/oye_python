# import os
# import imp

# from dotenv import load_dotenv, find_dotenv
# load_dotenv(find_dotenv())

# from config import app
# from modules.db import db
# db.init()
# result = db.connection.execute('Select * from status')
# for row in result:
# 	print row
# from app.models.Contact import Contact


# user = db.session


# from config import database
# from modules.db.DbClass import DbClass

# dbCaspio = DbClass(database.default_caspio)
# # print dbCaspio
# result = dbCaspio.connection.execute('Select * from status')
# for row in result:
# 	print row
# from app.models.Contact import Contact


# for plugin in app.modules:
# 	instance = imp.load_source('db', './modules/db/db.py')
# 	instance.init()



## WWW Plugin Example
# from modules.www import www
# fapp = www.create_app()
# fapp.run()





# import sqlalchemy
# from sqlalchemy.ext.declarative import declarative_base
# from sqlalchemy import create_engine
# from sqlalchemy import engine as engineSqlAchemy
# from sqlalchemy.orm import sessionmaker


# Base = declarative_base()

# connection_string = engineSqlAchemy.url.URL('mssql+pyodbc', username='ptusers', password='work', host='DESKTOP-TDQ2JMK', port='1433', database='ptmaindb', query={'driver' : 'ODBC Driver 13 for SQL Server'})
# print connection_string


# ##### PYODBC AZURE SQLACHEMY
# # con1 = "mssql+pyodbc://nti:x7ZxJehRwY@ptserver1.database.windows.net:1433/ptdb_dev?driver=ODBC Driver 13 for SQL Server"
# # con2 = "mssql+pyodbc://ptusers:work@DESKTOP-TDQ2JMK:1433/ptmaindb?driver=ODBC Driver 13 for SQL Server"

# engine = create_engine(connection_string)
# connection = engine.connect()
# result = connection.execute('Select * from status')
# for row in result:
# 	print row


##### PYODBC AZURE
# import pyodbc
# server = 'ptserver1.database.windows.net'
# database = 'ptdb'
# username = 'nti'
# password = 'x7ZxJehRwY'
# driver= '{ODBC Driver 13 for SQL Server}'
# cnxn = pyodbc.connect('DRIVER='+driver+';PORT=1433;SERVER='+server+';PORT=1443;DATABASE='+database+';UID='+username+';PWD='+ password)
# cursor = cnxn.cursor()
# cursor.execute("SELECT TOP 10 status.origin FROM status")
# row = cursor.fetchone()
# while row:
#     print (str(row[0]) + " " + str(row[1]))
#     row = cursor.fetchone()




# import os
# os.environ['TDSDUMP'] = 'stdout'
# import pymssql  
# conn = pymssql.connect(server='ptserver1.database.windows.net', 
#                    user='nti', 
#                    password='x7ZxJehRwY', 
#                    database='ptdb',
#                    tds_version='7.2',
#                    )



# tsql -H ptserver1.database.windows.net -p 1433 -U nti