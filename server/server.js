var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {ToDo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new ToDo({
        text : req.body.text
    });

    todo.save().then((todo) => {
        res.send(todo);
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos', (req, res) => {
    ToDo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.listen(3000, () => {
    console.log("Starting on port 3000");
});
