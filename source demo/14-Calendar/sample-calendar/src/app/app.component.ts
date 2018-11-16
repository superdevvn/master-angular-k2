import { Component, ViewChild } from '@angular/core';
import { CalendarControlComponent } from './calendar-control/calendar-control.component';
import { CalendarEvent, CalendarOption, TooltipInfo } from './calendar-control/calendar-control.model';
import * as moment from 'moment';
import { ObserverService } from './observer.service';
import { Observer1Service } from './observer1.service';
import { Observer2Service } from './observer2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  calendarOption: CalendarOption;
  @ViewChild('calendar') calendar: CalendarControlComponent;
  title = 'app';

  constructor(private observerService: ObserverService,
    private observer1Service: Observer1Service,
    private observer2Service: Observer2Service) {
    let user = this.observerService.getUserById('id1');
    console.log(user);
  }

  ngOnInit() {
    this.calendarOption = {
      getTooltipInfos: (calendarEvent) => {
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
  addRandomEvent() {
    let from = moment('2018/11/16 10:00').toISOString();
    let to = moment('2018/11/16 15:00').toISOString();
    const event: CalendarEvent = {
      resourceId: '1',
      title: 'Demo 1',
      start: from,
      end: to,
      data: {
        teacher: 'Peter',
        age: 18,
        gender: 'Male'
      }
    }
    this.calendar.event.add(event);
  }

  index = 0;
  clickDay(event: any) {
    let from = (event.date as Date).toISOString();
    let to = new Date((event.date as Date).setHours((event.date as Date).getHours() + 2)).toISOString();
    const calendarEvent = {
      resourceId: event.resource.id,
      title: `Demo ${this.index++}`,
      start: from,
      end: to,
      data: {
        teacher: 'Peter',
        age: 18,
        gender: 'Male'
      }
    }
    console.log(calendarEvent);
    this.calendar.event.add(calendarEvent);
  }
}
