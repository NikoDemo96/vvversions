from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import backref
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
            "role": self.role
        }



class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    version = db.Column(db.Integer, nullable=False, default=1)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    version_date = db.Column(db.String(50), nullable=False)
    user = db.relationship('User', backref='project', lazy=True)

    def __repr__(self):
        return '<Project %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "version": self.version,
            "user_id": self.user_id,
            "version_date": self.version_date
        } 


    @classmethod
    def create(cls,prj):
        try:
            new_prj = cls(**prj)
            db.session.add(new_prj)
            db.session.commit()
            return new_prj
        except Exception as error:
            db.session.rollback();
            print(error)
            return None;
        



class Song(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    gender = db.Column(db.String(80), nullable=False)
    artist = db.Column(db.String(50), nullable=False)
    version_date = db.Column(db.String(50), nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    user = db.relationship('User', backref='song', lazy=True)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=True)
    project = db.relationship('Project', backref=backref('songs', cascade="all,delete-orphan"), lazy=True)
    song_url = db.Column(db.String(120), nullable=False)
    cover_url = db.Column(db.String(240), nullable=False)
    

    def __repr__(self):
        return '<Song %r>' % self.title

    def serialize(self):
        return {
            "id": self.id,
            "project_id": self.project_id,
            "title": self.title,
            "description": self.description,
            "gender": self.gender,
            "artist": self.artist,
            "version_date": self.version_date,
            "song_url": self.song_url,
            "cover_url": self.cover_url
        }

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(240), nullable=False)
    start_date = db.Column(db.String(50), nullable=False)
    song_id = db.Column(db.Integer, db.ForeignKey('song.id'), nullable=True)
    song = db.relationship('Song', backref=backref('comments', cascade="all,delete-orphan"), lazy=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    user = db.relationship('User', backref='comment', lazy=True)
    
    def __repr__(self):
        return '<Comment %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "content": self.content,
            "name": self.user.username,
            "start_date": self.start_date,
            "song_id": self.song_id

        }


