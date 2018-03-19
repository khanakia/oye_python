import os
env = os.environ.get


default = env('DB_CONNECTION', 'mssql_local')
default_caspio = env('DB_CONNECTION', 'mssql_local')

connections = {
    # 'default' : 'mysql',
    # 'default_caspio' : 'mysql',
    'mysql' : {
        'driver' : 'mysql+pymysql',
        'host' : env('DB_HOST', 'localhost'),
        'port' : env('DB_PORT', '3306'),
        'database' : env('DB_DATABASE', 'khanakia_oyedb'),
        'username' : env('DB_USERNAME', 'root'),
        'password' : env('DB_PASSWORD', ''),
        'charset' : 'utf8',
        'collation' : 'utf8_unicode_ci',
        'prefix' : '',
        'strict' : False,
        'engine' : None,
        'query' : {'driver' : 'ODBC Driver 13 for SQL Server'}
    },

    'mssql_local' : {
        'driver' : 'mssql+pyodbc',
        'host' : env('DB_HOST', 'DESKTOP-TDQ2JMK'),
        'port' : env('DB_PORT', '1433'),
        'database' : env('DB_DATABASE', 'ptmaindb'),
        'username' : env('DB_USERNAME', 'ptusers'),
        'password' : env('DB_PASSWORD', 'work'),
        'charset' : 'utf8',
        'collation' : 'utf8_unicode_ci',
        'prefix' : '',
        'strict' : False,
        'engine' : None,
        'query' : {'driver' : 'ODBC Driver 13 for SQL Server'}
    },
}
