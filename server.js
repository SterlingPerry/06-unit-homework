const express = require('express');
const todoController = require('./controllers/todoController');
const app = express();

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
app.listen(process.env.PORT || 4000, function(){
console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env);
});