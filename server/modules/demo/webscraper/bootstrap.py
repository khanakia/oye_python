import os
from db import *

# LOAD DOTENV FILE
from dotenv import load_dotenv, find_dotenv
load_dotenv(find_dotenv())
# print os.environ.get("EMAIL")

MYSQL_CONNECTION_STRING = os.environ.get("MYSQL_CONNECTION_STRING")


db = DbClass(MYSQL_CONNECTION_STRING)


# sql = ('select * from links')
# result = db.connection.engine.execute(sql)
# names = []
# for row in result:
#     names.append(row[0])

# print names