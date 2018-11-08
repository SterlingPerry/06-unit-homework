const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Connect to the database
mongoose.connect('mongodb://testuser:testuser1@ds157383.mlab.com:57383/todo');

// Create the schema
const todoSchema = new mongoose.Schema({
    item: String
});

// Create the model
const Todo = mongoose.model('Todo', todoSchema);


// let data = [{ item: 'rewatch class' }, { item: 'redo activities' }, { item: 'sleep' }];
const urlencodedParser = bodyParser.urlencoded({ extended: true });

module.exports = function (app) {
    app.get('/todo', function (req, res) {
        // get data from mongodb and pass it to view
        Todo.find({}, function(err, data){
            if (err) throw err;
            res.render('todo', { todos: data });
        });
        
    });

    app.post('/todo', urlencodedParser, function (req, res) {
        // get data from the veiw and add it to mongodb
        var newTodo = Todo(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        })
    });

    app.delete('/todo/:item', function (req, res) {
        // delete requested item from mongodb
        Todo.find({item: req.params.item.replace(/\-/g, " ")}).deleteOne(function(err, data){
            if (err) throw err;
            res.json(data);
        })
        
    });
}