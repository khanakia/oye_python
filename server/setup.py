# Run command to install all the dependencies setup.py develop

from setuptools import setup, find_packages
setup(
    name="HelloWorld",
    version="0.1",
    packages=find_packages(),
    install_requires=[
          'requests',
          'flask',
          'flask_failsafe',
          'Flask-JWT',
          'flask_cors',
          'SQLAlchemy',
          'pymssql',
          'python-dotenv',
          'lxml',
          'pprint',
      ],
)


