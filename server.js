const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();

const io = require('socket.io')(server);
const mongoose = require('mongoose');
const PORT  = process.env.PORT || 4000;

//set up template engine

app.set('view engine', 'ejs');

//static files
app.use(express.json());
app.use(express.static('./public'));

//fire controllers
todoController(app);

//listen to port
app.listen(4000);
console.log('you are listeing to port 4000');