import { Component } from '@angular/core';
import { Person } from './models/sample1';
import { GridOption } from 'superdev-angular-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  person: Person;
  gridOption: GridOption;
  ngOnInit(){
    const items = [
      {
        firstName: 'Super',
        lastName: 'Dev'
      },
      {
        firstName: 'Nghia',
        lastName: 'Tran'
      }
    ];
    this.gridOption = {
      type: 'local',
      items: items,
      addable: true,
      editable: {
        onSave: (item)=>{
          console.log(item);
        }
      },
      commands: [
        {
          icon: (item)=>{
            if(item.firstName == 'Super') return 'fa fa-pencil text-danger';
            else return 'fa fa-trash-o text-warning';
          },
          title: 'Edit',
          click: (item)=>{
            console.log(item);
          }
        }
      ],
      columns: [
        {
          type: 'string',
          field: 'firstName',
          title: 'First Name'
        },
        {
          type: 'string',
          field: 'lastName',
          title: 'Last Name'
        }
      ],
      onImportExcel: (items)=>{
        console.log(items)
      }
    }
  }

  login(loginInfo){
    console.log(loginInfo);
  }
  forgotPassword(){
    alert('You click Forgot Password');
  }
  createAccount(){
    alert('You click Create Account');
  }
}
