import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import { CalendarEvent } from './calendar-control.model';
import Default from 'fullcalendar/View';

@Component({
  selector: 'app-calendar-control',
  templateUrl: './calendar-control.component.html',
  styleUrls: ['./calendar-control.component.css']
})
export class CalendarControlComponent implements OnInit {
  @ViewChild('calendar') calendar: ElementRef;
  events: CalendarEvent[] = [];
  constructor() { }

  ngOnInit() {
    $(this.calendar.nativeElement).fullCalendar({
      // schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      header: {
        left: "promptResource today prev,next",
        center: "title",
        right: "timelineDay,timelineThreeDays,list"
      },
      views: {
        timelineThreeDays: {
          type: 'timeline',
          duration: { days: 3 },
          buttonText: '3 ngày'
        },
        timelineDay: {
          buttonText: 'Ngày'
        }
      },
      defaultView: "timelineDay",
      resources: [{
        id: '1',
        title: 'Super'
      },
      {
        id: '2',
        title: 'Dev'
      }],
      events: [],
      eventMouseover: (event: CalendarEvent, jsEvent: MouseEvent, view: Default)=> {
        console.log(event.title);
      }
    });
  }

  event = {
    add: (calendarEvent: CalendarEvent) => {
      this.events.push(calendarEvent);
      $(this.calendar.nativeElement).fullCalendar('renderEvent', calendarEvent);
    },
    remove: () => {

    },
    clear: () => {

    }
  }
}
