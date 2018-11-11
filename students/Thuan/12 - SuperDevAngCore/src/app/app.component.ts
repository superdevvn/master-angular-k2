import { Component } from '@angular/core';
import { Person } from './models/sample';

import { GridOption } from 'superdev-angular-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  gridOption:GridOption
  ngOnInit(): void {
    const item =[
      {
        firstname:'123',
        lastname:'123',
      },
      {
        firstname:'Super',
        lastname:'456',
      },
    ];
    this.gridOption ={
      type:'local',
      key:'12312321',
      items:item,
      addable:true,
      editable:{onSave:(item)=>{
        console.log(item);
      }},
      commands:[{
        icon:(item)=>{
          if(item.firstname =="Super")
          return 'fa fa-pencil text-danger';
          else return 'fa fa-trash-o text-warning'
        },
        title:'Edit',
        click:(item)=>{
          console.log(item)
        }
      }
      ],
      columns:[
        {
          type:'string',
          field:'firstname',
          title:'Firstname',
        },
        {
          type:'string',
          field:'lastname',
          title:'Last name',
        },
      ],
      onImportExcel:(item)=>{
        console.log(item)
      }
    }
  }
  login(loginInfo){
    console.log(this.login)
  }
}
