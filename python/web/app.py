from flask import Flask

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    msg = "Hello World!"
    return msg