from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class Role(enum.Enum):
    musicians = "musicians"
    producer = "producer"
    manager = "manager"
    other = "other"

class Performertype(enum.Enum):
    band = "band"
    soloist = "soloist"
    artist_collective = "artist_collective"
    guest = "guest"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(80), nullable=True)
    artist_name = db.Column(db.String(80), nullable=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(240), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    role = db.Column(db.Enum(Role), nullable=False, default="other")
    performertype = db.Column(db.Enum(Performertype), nullable=False, default="guest")

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "fullname": self.fullname,
            "username": self.username,
            "email": self.email,
            "password": self.password,
            "is_active": self.is_active,
            "role": self.role,
            "performertype": self.performertype
        }


class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(80), nullable=False)
    version_date = db.Column(db.String(50), nullable=False)
    cover_image = db.Column(db.String(250), nullable=False)

    def __repr__(self):
        return '<Song %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "gender": self.gender,
            "version_date": self.version_date,
            "cover_image": self.cover_image
        }



class Advertisement(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(600), nullable=False)
    start_date = db.Column(db.String(50), nullable=False)
    end_date = db.Column(db.String(50), nullable=False)
    ad_image = db.Column(db.String(250), nullable=False)

    def __repr__(self):
        return '<Song %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "text": self.text,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "ad_image": self.ad_image
        }

