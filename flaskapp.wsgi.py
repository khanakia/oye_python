#!/usr/bin/python
import sys
import logging
logging.basicConfig(stream=sys.stderr)
sys.path.insert(0,"D:\\EasyPHP-DevServer-14.1VC11\\data\localweb\\trakkar_webapp\\server\\modules\\www\\")

from FlaskApp import fapp as application
