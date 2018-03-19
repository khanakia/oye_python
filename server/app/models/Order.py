from sqlalchemy import Column, ForeignKey, Integer, String, NVARCHAR, Numeric, DateTime
from sqlalchemy.ext.declarative import declarative_base
Base = declarative_base()

class Order(Base):
    __tablename__  = 'orders'
    id = Column('ID', Integer, primary_key=True)
    invoice_no = Column('INVOICE_NO', Integer)
    make = Column('MAKE', String)
    model = Column('MODEL', String)
    part_no = Column('PART_NO', String)
    on_order = Column('ON_ORDER', String)
    po2 = Column('PO2', String)
    comments = Column('comments', String)
    partcost = Column('partcost', Numeric(18,2))
    on_order = Column('ON_ORDER', Integer)
