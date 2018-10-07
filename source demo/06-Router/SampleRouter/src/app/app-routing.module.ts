import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';

const routes: Routes = [
  { path: '', component: Test1Component },
  {
    path: 'test1', component: Test1Component, children: [
      { path: '', redirectTo: 'child1', pathMatch: 'full' },
      { path: 'child1', component: Child1Component },
      { path: 'child2', component: Child2Component }
    ]
  },
  {
    path: 'test2', component: Test2Component, children: [
      { path: '', redirectTo: 'child3', pathMatch: 'full' },
      { path: 'child3', component: Child3Component },
      { path: 'child4', component: Child4Component }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
