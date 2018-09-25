const bodyParser = require('body-parser');

const data = [{item: 'rewatch class'}, {item: 'redo activities'}, {item: 'sleep'}];
const urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = function(app) {

app.get('/todo', function(req, res){
res.render('todo', {todos: data});
});   

app.post('/todo', urlencodedParser, function(req, res){
data.push(req.body);
res.json(data);
}); 

app.delete('/todo/:item', function(req, res){
data = data.filter(function(tod){
    return todo.item.replace(/ /g, '-') !== req.params.item;
});
res.json(data);
}); 
}