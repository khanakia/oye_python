from sqlalchemy import Column, ForeignKey, Integer, String, NVARCHAR, Numeric, DateTime,Text
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class Status(Base):
    __tablename__  = 'status'
    id = Column('StatusId', Integer, primary_key=True)
    title = Column('Status_Desc', String)
    status_to_send = Column('status_to_send', String)
    origin = Column('origin', String)

