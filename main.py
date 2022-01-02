from flask import Flask,render_template,request,session,redirect, url_for,flash
from app import create_app

app = create_app()




@app.route('/')
def inicio():
    return render_template('home.html')


@app.route('/login')
def login():
    return render_template('login.html')