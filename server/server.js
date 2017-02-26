var express = require('express');
// create an app variable by initalizing express 
var app = express();

//Lets make a server and make it listen on to a port
var PORT = 8000;
var server = app.listen(PORT,function(){
	console.log("The app is listening on port",PORT);
})

//now lets connect socket.io to this server
var io =  require('socket.io').listen(server);
//on a connection from a client do these things
io.on('connection',function(socket){
	console.log("A client connected");
	
	socket.on('contact',function(data){
		console.log('server side ',data);
		socket.emit('contact','wassssuppp');
	})

	socket.on('component-contact',function(data){
		console.log('component connection',data);
		socket.emit('component-contact',"sup from the server to search")
	})
})
