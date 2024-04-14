from flask import Flask, render_template, jsonify, request
import random

app = Flask(__name__)

words = [
    {
    "inputs": 5,
    "category": "Name an indoor board game",
    "word": "Chess"
    },
    {
    "inputs": 6,
    "category": "Name the European country also known as 'The Hexagon' ",
    "word": "France"
    },
    {
    "inputs": 7,
    "category": "Name the planet after Mars",
    "word": "Jupiter"
    },
    {
    "inputs": 3,
    "category": "Name the pet animal belonging to lion family",
    "word": "Cat"
    },
    {
    "inputs": 5,
    "category": "Who is the king of fruits?",
    "word": "Mango"
    },
    {
    "inputs": 5,
    "category": "Name the largest animal on the Earth",
    "word": "Whale"
    },
    {
    "inputs": 6,
    "category": "Name the national game of India",
    "word": "Hockey"
    },
]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/get-word")
def get_word():
    return jsonify({
        "status": "success",
        "word": random.choice(words)
    })

if __name__ == "__main__":
    app.run(debug=True)