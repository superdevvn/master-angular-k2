import { Component, ViewChild } from '@angular/core';
import { LoadingService, NotifyService, ApiService, GridOption, GridControlComponent } from 'superdev-angular-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  date: any;
  gridOption: GridOption;
  @ViewChild('grid') grid: GridControlComponent;
  constructor(private loadingService: LoadingService,
    private notifyService: NotifyService,
    private apiService: ApiService){
    this.apiService.setHost('http://gateway-test.trinhshipping.com');
  }

  ngOnInit(){
    // this.loadingService.start();
    // this.apiService.post('/api/importxexport/all',{}).then(items=>{
    //   console.log(items);
    //   this.loadingService.stop();
    //   this.notifyService.notify.success();

    //   this.gridOption = {
    //     type: 'local',
    //     key: '0b033162-23a9-4eb3-a86a-756b29394f53',
    //     checkable: true,
    //     items: items,
    //     paginate: {
    //       pageSize: 100,
    //       pages: [100, 200, 300],
    //     },
    //     commands: [
    //       {
    //         icon: 'fa fa-pencil text-primary',
    //         title: 'Edit',
    //         click: (item)=>{
    //           console.log(item);
    //         },
    //         disabled: (item)=>{
    //           console.log(item.companyCountry == 'China');
    //           return item.companyCountry == 'China';
    //         }
    //       }
    //     ],
    //     columns: [{
    //       field: 'year',
    //       title: 'Year',
    //       type: 'string',
    //       width: '150px'
    //     },
    //     {
    //       field: 'month',
    //       title: 'Month',
    //       type: 'string',
    //       width: '150px'
    //     },
    //     {
    //       field: 'companyCountry',
    //       title: 'Company Country',
    //       type: 'string',
    //       width: '150px'
    //     }]
    //   };
    // }).catch(e=>{
    //   this.loadingService.stop();
    //   this.notifyService.notify.error();
    // });
    this.gridOption = {
      type: 'dotnet',
      url: '/api/importxexport/list',
      key: '0b033162-23a9-4eb3-a86a-756b29394f53',
      checkable: true,
      editable: {
        type: 'inline',
        onSave: (item)=>{
          console.log(item)
        }
      },
      paginate: {
        pageSize: 100,
        pages: [100, 200, 300],
      },
      commands: [
        {
          icon: 'fa fa-pencil text-primary',
          title: 'Edit',
          click: (item)=>{
            console.log(item);
          },
          disabled: (item)=>{
            console.log(item.companyCountry == 'China');
            return item.companyCountry == 'China';
          }
        }
      ],
      columns: [{
        field: 'year',
        title: 'Year',
        type: 'string',
        width: '150px'
      },
      {
        field: 'month',
        title: 'Month',
        type: 'string',
        width: '150px'
      },
      {
        field: 'companyCountry',
        title: 'Company Country',
        type: 'string',
        width: '150px'
      }]
    };
    
  }
  title = 'app';

  click(){
    console.log(this.grid.selectedItems);
  }
}
