import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { AppRoutingModule } from './app.routes.module';
import { BoardModule } from './board/board.module';

@NgModule({
	imports:      [
		BrowserModule,
		AppRoutingModule,
		BoardModule
	],
	declarations: [ AppComponent ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }