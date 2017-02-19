var express = require('express');
var multer = require('multer');
var port = process.env.PORT || 8080;

var app = express();
var upload = multer({dest: 'uploads/'});

app.get('/',function(req,res){
	res.sendFile(__dirname + "/index.html");
})
app.post('/api/file',upload.single('userfile'),function(req,res){
	console.log(req.file['size']);
	res.json("size: "+JSON.stringify(req.file['size']));
})
app.listen(port);