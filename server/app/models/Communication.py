from sqlalchemy import Column, ForeignKey, Integer, String, NVARCHAR, Numeric, DateTime, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship

from PtMain import PtMain

Base = declarative_base()

class Communication(Base):
    __tablename__  = 'communication'
    id = Column('id', Integer, primary_key=True)
    dated = Column('dated', DateTime)
    # woid = Column('woid', Integer)
    woid = Column(Integer, ForeignKey(PtMain.invoice_no))
    wo = relationship(PtMain)
    sony_comid = Column('sony_comid', Integer)
    com_note = Column('com_note', Text)
    comm_type = Column('comm_type', Integer)
    # ack_yn = Column('ack_yn', Integer)
    private_yn = Column('private_yn', Integer)
    uid = Column('uid', String)
    updated_at = Column('updated_at', DateTime)
    updated_yn = Column('updated_yn', Integer)
    updated_origin = Column('updated_origin', String)
    lastsent_at = Column('lastsent_at', DateTime)
    lastsent_uid = Column('lastsent_uid', String)