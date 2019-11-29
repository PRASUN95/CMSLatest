import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {ContentComponent} from './components/content.component';
import {CategoryComponent} from './components/category.component';

const routes: Routes = [
  {
    path : '',
    component : UserComponent
},
{
    path : 'about',
    component : AboutComponent
},
{
    path : 'content',
    component : ContentComponent
},
{
    path : 'category',
    component : CategoryComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
