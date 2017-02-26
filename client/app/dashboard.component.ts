import { Component } from '@angular/core';
import { Search } from './search.component';

@Component({
	selector:'my-dashboard',
	template:`
	{{title}}
	<search></search>
	`
})

export class Dashboard{
	title="Lets see if we can manulate the DOM using socket.io. Also how did we pass the socket variable to components again?"
}