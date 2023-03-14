from database import db, ma
from modal import Product, Review
from datetime import datetime
from sqlalchemy.types import Unicode 
import os

from flask import Flask, render_template, request, redirect, url_for,jsonify

# Init app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:surjeet@localhost:5432/full_stack_final_project'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

app.app_context().push()

# class user(db.Model):
#   id = db.Column(db.Integer, primary_key=True)
#   status = db.Column(db.String(100))
#   copy_right = db.Column(db.String(300))

customers = db.Table('customers',db.metadata)
  

@app.get('/')
def index():
    
    data_obj = db.session.query(customers).all()
    
    for res in data_obj:
      print(res.first_name)
  
# @app.get('/check_box_filter')
# def check_box_filter():
#     column=",".join(list(request.json.values()))
#     conn = psycopg2.connect(database="full_stack_final_project", 
#                             user="postgres",
#                             password="ksurjeet@12345", 
#                             host="localhost", port="5432")

#     cur = conn.cursor()
#     cur.execute(f"SELECT {column} FROM final_project.customers")
#     data = cur.fetchall()
#     cur.close()
#     conn.close()
  
#     return {"data":data}

# @app.get('/filter')
# def filter():
#     column=",".join(list(request.json.values()))
#     conn = psycopg2.connect(database="full_stack_final_project", 
#                             user="postgres",
#                             password="ksurjeet@12345", 
#                             host="localhost", port="5432")

#     cur = conn.cursor()
#     cur.execute(f"SELECT {column} FROM final_project.customers")
#     data = cur.fetchall()
#     cur.close()
#     conn.close()
  
#     return {"data":data}


if __name__ == "__main__":
    app.run(port=5001, debug = True)
  



    
    






