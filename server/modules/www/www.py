import sys, os
sys.path.append('../../')

from flask import Flask, request, jsonify
from flask_failsafe import failsafe
from flask_cors import CORS
import json
from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp


from config import www, app
from includes import module
from modules.db import db
from modules.trakkar import caspio
from app.models.User import User

db.init()

def authenticate(username, password):
    # user = username_table.get(username, None)
    user = db.session.query(User).filter_by(username=username).first()
    if user and safe_str_cmp(user.password.encode('utf-8'), password.encode('utf-8')):
        return user

def identity(payload):
    user_id = payload['identity']
    # return userid_table.get(user_id, None)
    user = db.session.query(User).filter_by(id=user_id).first()
    return user

fapp = Flask(__name__)
fapp.config['SECRET_KEY'] = 'super-secret'
jwt = JWT(fapp, authenticate, identity)

@failsafe
def create_app():
	cors = CORS(fapp, resources={r"/*": {"origins": "*"}})

	@fapp.route('/', methods=['GET'])
	@jwt_required()
	def index():
		return 'Ok'
	# for m in module.listModules():
	# 	moduleInstance = module.loadModule(m)
	# 	if("www_before_load" in dir(moduleInstance)):
	# 		args = (fapp,name)
	# 		moduleInstance.www_before_load(*args)	

	# args = (fapp,)
	# module.doAction("www_before_load", args)

	@fapp.route('/caspio', methods=['POST'])
	def caspio_send_estimate():
		content = request.get_json(silent=True)
		company = content['company']
		# company = request.args.get('company', '')
		return jsonify(caspio.processRecords(company))


	return fapp

if __name__ == '__main__':
	fapp = create_app()
	fapp.run(host=www.host, port=www.port, debug=www.debug)


	# for m in module.listModules():
	# 	print m
	# for o in os.listdir(app.mdoules_dir):
	# 	if os.path.isdir(os.path.join(app.mdoules_dir,o)):
	# 		print o


