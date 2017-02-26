import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { Dashboard } from './dashboard.component';
import { Search } from './search.component';
@NgModule({

imports 		: [ BrowserModule , FormsModule ],
declarations 	: [ Dashboard , Search ],
bootstrap		: [ Dashboard ]	

})

export class AppModule { }
