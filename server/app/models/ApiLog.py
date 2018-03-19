from sqlalchemy import Column, ForeignKey, Integer, String, NVARCHAR, Numeric, DateTime,Text
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class ApiLog(Base):
    __tablename__  = 'api_log'
    id = Column('id', Integer, primary_key=True)
    uid = Column('uid', String)
    request_method = Column('request_method', String)
    request_url = Column('request_url', Text)
    request_headers = Column('request_headers', Text)
    request_body = Column('request_body', Text)
    response_status_code = Column('response_status_code', Integer)
    response_headers = Column('response_headers', Text)
    response_body = Column('response_body', Text)
    log_type = Column('log_type', String)

