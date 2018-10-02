import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Child3Component } from './child3/child3.component';

const routes: Routes = [
  {path:'', redirectTo:'test1',pathMatch:'full'},
  // hoặc là {path:'', component:Test1Component},
  {path:'test1',component:Test1Component, children:[
    {path:'',redirectTo:'child',pathMatch:'full'},{
      path:'child', component:ChildComponent
    },{path:'child1', component:Child1Component
    }
  ]},
  {path:'test2',component:Test1Component, children:[
    {path:'',redirectTo:'child2',pathMatch:'full'},{
      path:'child2', component:Child2Component
    },{
      path:'child3', component:Child3Component
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
