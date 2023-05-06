from flask_sqlalchemy import SQLAlchemy
import enum

db = SQLAlchemy()

class Role(enum.Enum):
    musicians = "musicians"
    manager = "manager"
    other = "other"

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    artist_name = db.Column(db.String(80), nullable=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(240), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)
    role = db.Column(db.Enum(Role), nullable=False, default="other")
   

    def __repr__(self):
        return '<User %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "artist_name": self.artist_name,
            "is_active": self.is_active,
            "role": self.role,
        }


class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    gender = db.Column(db.String(80), nullable=False)
    version_date = db.Column(db.String(50), nullable=False)
    url = db.Column(db.String(120), nullable=False)

    

    def __repr__(self):
        return '<Song %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "gender": self.gender,
            "version_date": self.version_date,
            "url": self.url,
            
        }



class Coment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(600), nullable=False)
    start_date = db.Column(db.String(50), nullable=False)
    ad_image = db.Column(db.String(250), nullable=False)
    

    def __repr__(self):
        return '<Song %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "text": self.text,
            "start_date": self.start_date,
            "ad_image": self.ad_image
        }


