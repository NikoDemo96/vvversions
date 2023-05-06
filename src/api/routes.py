"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""

from werkzeug.security import generate_password_hash, check_password_hash
from flask_jwt_extended import create_access_token

from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Role
from api.utils import generate_sitemap, APIException
from api.firebase.firebase import Bucket

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

    #Comieza mis endpoints


@api.route("/user", methods=["POST"])
def register():
    body = request.json
    username = body.get("username", None)
    artist_name = body.get("artist_name", None)
    email = body.get("email", None)
    password = body.get("password", None)
    role = body.get("role", None)   
    is_active = True
    print("*****")
    print(body)
    if username is None or artist_name is None or email is None or password is None or role is None:
        return {"error": "todos los campos son requeridos"}, 400    

    if role not in Role.__members__:
        return {"error": f"{role} No existe en los roles disponibles"}

    user_hash = generate_password_hash(password)
        
    new_user = User(username=username,  artist_name=artist_name, email=email, password=user_hash, role=role, is_active=is_active)
    db.session.add(new_user)
    try:
        db.session.commit()
        return jsonify({"msg": "Usuario creado"})
    except Exception as error:
        db.session.rollback()
        return jsonify({"error": error})     


@api.route("/user/login", methods=["POST"])
def login():
    body = request.json
    email = body.get("email", None)
    password = body.get("password", None)
    print(email, password)
    if email is None or password is None:
        return {"error": "Todos los campos son requeridos"}, 400

    login_user = User.query.filter_by(email=email).first()

    if not login_user:
        return {"error": "Usuario no encontrado"}, 401

    if check_password_hash(login_user.password, password):
        token = create_access_token({"id": login_user.id})
        print(token)
        return jsonify({"access_token": token, "artist_name": login_user.artist_name})
    else:
        return jsonify({"error": "Contrasena incorrecta"}), 401


@api.route("/change-password", methods=["PUT"])
def change_password():
    body = request.json
    email = body.get("email", None)
    new_password = body.get("new_password", None)
    old_password = body.get("old_password", None)

    if not email or not old_password or not new_password:
        return {"error": "Todos los campos son requeridos"}

    update_user = User.query.filter_by(email=email).first()

    if not update_user:
        return {"error": "usuario no encontrado"}, 404

    if check_password_hash(update_user.password, old_password):
        hash_password = generate_password_hash(new_password)
        update_user.password = hash_password
        db.session.commit()
        return "cambiando contrasena"
    
    return {"error": "Contrasena invalida"}

@api.route("/songs", methods={"POST"}) 
def create_song():
    form = request.form
    files = request.files 
    title = form.get("title")
    gender = form.get("gender")
    version_date = form.get("version_date")
    song = files.get("song")
    print(title, gender, song, version_date)
    url = Bucket.upload_file(song, song.filename)
    print(url)
    return "ok mi pana"