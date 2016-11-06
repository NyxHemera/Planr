import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoardComponent } from './board/board.component';

const routes: Routes = [
/*	{
		path: 'user-profile',
		component: ProfileComponent
	},*/
	{
		path: 'board',
		component: BoardComponent
	},
/*	{
		path: 'login',
		component: LoginComponent
	},*/
	{
		path: '',
		redirectTo: '/board',
		pathMatch: 'full'
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}