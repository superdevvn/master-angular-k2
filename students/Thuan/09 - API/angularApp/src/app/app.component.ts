import { Component } from '@angular/core';
import {LoadingService,NotifyService, ApiService,GridOption} from 'superdev-angular-core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridOption:GridOption;
  constructor(private loadingService: LoadingService,private notifyService:NotifyService,private apiService:ApiService){
    this.apiService.setHost('http://gateway-test.trinhshipping.com')
  }
  
  ngOnInit(): void {
  this.loadingService.start();
  this.apiService.post('/api/importexport/all',{}).then(item=>{
    console.log(item);
    this.loadingService.stop();
    this.notifyService.notify.success();
    this.gridOption={
      type:'local',
      items:item,
      totalField:,
      commands:[{
        icon:'fa fa-pencil text-primary',
        title:'Edit',
        click:(item)=>{
          console.log(item)
        },
        disabled:(items)=>{
          return item.company
        }
        
      }],
      columns:[{
        field:'year',
        title:'Year',
        type:'string',
        width:'150px'
      },{
        field:'month',
        title:'Month',
        type:'string',
        width:'150px'
      },
    ]
    };
  }).catch(e=>{
    this.loadingService.stop();
    this.notifyService.notify.error();
  })
  }
}

