from modules.db import db
db.init()
result = db.connection.execute('Select * from status')
for row in result:
	print row
