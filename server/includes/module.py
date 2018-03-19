import sys, os
import imp
sys.path.append('..\\')

from config import www, app

def listModules():
	modules = []
	for o in os.listdir(app.mdoules_dir):
		if os.path.isdir(os.path.join(app.mdoules_dir,o)):
			modules.append(o)
	return modules

def loadModule(module_name):
	module_full_path = os.path.join(app.mdoules_dir,module_name,module_name+'.py')
	if(os.path.exists(module_full_path)):
		instance = imp.load_source(module_name, module_full_path)
		return instance
	pass


def applyFilter(tag, args):
	for m in listModules():
		moduleInstance = loadModule(m)
		if(tag in dir(moduleInstance)):
			moduleInstance.www_before_load(*args)

def addFilter(tag, function_to_add, priority=10, accepted_args=1):
	for m in listModules():
		moduleInstance = loadModule(m)
		if(tag in dir(moduleInstance)):
			moduleInstance.www_before_load(*args)

def doAction(tag, args):
	for m in listModules():
		moduleInstance = loadModule(m)
		if(tag in dir(moduleInstance)):
			moduleInstance.www_before_load(*args)


def addAction(tag, function_to_add, priority=10, accepted_args=1):
	for m in listModules():
		moduleInstance = loadModule(m)
		if(tag in dir(moduleInstance)):
			moduleInstance.www_before_load(*args)
