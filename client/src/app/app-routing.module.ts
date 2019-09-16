import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameListComponent} from '../app/components/game-list/game-list.component'

import {GameFormComponent} from '../app/components/game-form/game-form.component';

const routes: Routes = [
{
  path:"",
  redirectTo:"/games",
  pathMatch:"full"
},
{
  path:"games",
  component:GameListComponent
},
{
  path:"games/add",
  component:GameFormComponent
},
{
  path:'games/edit/:id',
  component:GameFormComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
