#!/usr/bin/python
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,'/var/www/phototech_trakkar_python/server/')
#sys.path.insert(0,'./')
from modules.www import www
application = www.create_app()
print application.config
