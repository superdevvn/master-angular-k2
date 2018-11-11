import { Component, ViewChild } from '@angular/core';
import { CalendarControlComponent } from './calendar-control/calendar-control.component';
import { CalendarEvent } from './calendar-control/calendar-control.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('calendar') calendar: CalendarControlComponent;
  title = 'app';

  addRandomEvent(){
    const event: CalendarEvent = {
      resourceId: '1',
      title: 'Demo 1',
      start: '2018/11/11 10:00',
      end: '2018/11/11 12:00'
    }
    this.calendar.event.add(event);
  }
}
