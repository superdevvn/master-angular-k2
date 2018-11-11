import { Component, ViewChild } from '@angular/core';
import { CalendarControlComponent } from './calendar-control/calendar-control.component';
import { CalendarEvent, CalendarOption, TooltipInfo } from './calendar-control/calendar-control.model';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calendarOption: CalendarOption;
  @ViewChild('calendar') calendar: CalendarControlComponent;
  title = 'app';
  ngOnInit(){
    this.calendarOption = {
      getTooltipInfos: (calendarEvent)=>{
        let results: TooltipInfo[] = [];
        results.push({
          title: 'Teacher',
          value: calendarEvent.data.teacher
        });
        results.push({
          title: 'Age',
          value: calendarEvent.data.age
        });
        return results;
      }
    }
  }
  addRandomEvent(){
    let from = moment('2018/11/11 10:00').toISOString();
    let to = moment('2018/11/11 12:00').toISOString();
    const event: CalendarEvent = {
      resourceId: '1',
      title: 'Demo 1',
      start:  from,
      end: to,
      data: {
        teacher: 'Peter',
        age: 18,
        gender: 'Male'
      }
    }
    this.calendar.event.add(event);
  }
}
