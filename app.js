var express = require('express'); 
var app = express(); 
var port = 8081; 
app.listen(port);
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());

var taskList=[{'task1':'one'}];
app.post('/task', function(req, res){ 
    taskList.push(req.body.task);   
res.send(taskList); 
})
app.delete('/task/:task_index', function(req, res){   
    var taskIndex = req.params.task_index;   
    taskList.splice(taskIndex, 1);   
    res.send(taskList); 
})


app.get('/list', function(req, res){   
    res.send(taskList); 
})

console.log("Server is listening on", port) 

