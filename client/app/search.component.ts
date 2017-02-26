import { Component, OnInit } from '@angular/core';

@Component({
	selector:'search',
	template:`<div>
	<input [(ngModel)]="searchString" placeholder="What are you looking for">
	<div>
	`
})

export class Search implements OnInit{
	searchString = "wassup";
	ngOnInit(){
		console.log("Search Component initialized");
		console.log("socket",socket);
		socket.on('component-contact',function(data){
			console.log("the server says",data)
		});
		socket.emit('component-contact',"search contact");
	}
}