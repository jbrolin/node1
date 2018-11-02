var express = require('express'); 
var app = express(); 
var port = 8081; 
app.listen(port);

var taskList = []; 
app.get('/list', function(req, res){   
    res.send(taskList); 
})

console.log("Server is listening on", port) 

