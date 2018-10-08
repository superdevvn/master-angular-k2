import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Children1Component } from './children1/children1.component';
import { Children2Component } from './children2/children2.component';
import { Children3Component } from './children3/children3.component';
import { Children4Component } from './children4/children4.component';

const routes: Routes = [
  {path:'', component: Test1Component},
  {path: 'test1', component: Test1Component, children: [
    {path: '', redirectTo: 'children1', pathMatch: 'full'},
    {path: 'children1', component: Children1Component},
    {path: 'children2', component: Children2Component},
  ]},
  {path: 'test2', component: Test2Component, children: [
    {path: '', redirectTo: 'children3', pathMatch: 'full'},
    {path: 'children3', component: Children3Component},
    {path: 'children4', component: Children4Component},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
