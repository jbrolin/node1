var express = require('express'); 
var app = express(); 
var port = 8081; 
app.listen(port);
var bodyParser = require('body-parser'); 
app.use(bodyParser.json());

var _  = require('lodash');

var taskList=[{'task1':'one'}];

app.delete('/task/:task_index', function(req, res){   
    var taskIndex = req.params.task_index;   
    taskList.splice(taskIndex, 1);   
    res.send(taskList); 
})


app.get('/list', function(req, res){   
    res.send(taskList); 
})

app.put('/task/:task_index', function(req, res){   
    var taskIndex = req.params.task_index;   
    taskList[taskIndex] = req.body.task;  
    res.send(taskList); 
})

app.post('/task', function(req, res){ 
    var task = req.body.task;   
    if(_.isEmpty(task)){     
        return res.status(422).send("Task is empty");   
    }
    taskList.push(req.body.task);   
    res.send(taskList); 
})

console.log("Server is listening on", port); 

