from sqlalchemy import Column, ForeignKey, Integer, String, NVARCHAR, Numeric, DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class Eq(Base):
    __tablename__  = 'eq'
    id = Column('ID', Integer, primary_key=True)
    invoice = Column('invoice', Integer)
    make1 = Column('MAKE1', String)
    model1 = Column('MODEL1', String)
    model1_sn = Column('MODEL1_SN', String)
    ctype = Column('Ctype', String)
    cost = Column('cost', String)
    mode = Column('mode', Integer)
    amt = Column('amt', Integer)
    renttime = Column('rentTime', Integer)
    length = Column('length', Integer)
    disc = Column('disc', Numeric(18,2))
    uid = Column('uid', String)