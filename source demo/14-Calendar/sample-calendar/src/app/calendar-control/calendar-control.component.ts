import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import 'fullcalendar-scheduler';
import { CalendarEvent, CalendarOption } from './calendar-control.model';
import Default from 'fullcalendar/View';
import { Moment } from 'moment';

@Component({
  selector: 'app-calendar-control',
  templateUrl: './calendar-control.component.html',
  styleUrls: ['./calendar-control.component.css']
})
export class CalendarControlComponent implements OnInit {
  @Input() option: CalendarOption;

  @Output() onClickDay = new EventEmitter<{
    date: Date,
    resource: any,
    jsEvent?: MouseEvent
  }>();

  @ViewChild('calendar') calendar: ElementRef;
  @ViewChild('tooltip') tooltip: ElementRef;
  events: CalendarEvent[] = [];
  tooltipInfos: {
    title: string,
    value: string
  }[] = [];
  constructor() { }

  ngOnInit() {
    $(this.calendar.nativeElement).fullCalendar({
      // schedulerLicenseKey: 'CC-Attribution-NonCommercial-NoDerivatives',
      nowIndicator: true, // Hiển thị đánh dấu thời gian hiện tại
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
      editable: true,
      eventDrop: (event: CalendarEvent) => {
        console.log(event);
      },
      eventResize: (event: CalendarEvent) => {
        console.log(event);
      },
      dayClick: (date: Moment, jsEvent: MouseEvent, view: Default, resourceObj: any) => {
        this.onClickDay.emit({
          date: date.toDate(),
          resource: resourceObj,
          jsEvent: jsEvent
        });
      },
      eventMouseover: (event: CalendarEvent, jsEvent: MouseEvent, view: Default) => {
        console.log(event.title);
        if (this.option && this.option.getTooltipInfos) {
          this.tooltipInfos = this.option.getTooltipInfos(event);
        } else this.tooltipInfos = [];
        $(this.tooltip.nativeElement).css('top', jsEvent.clientY + 10);
        $(this.tooltip.nativeElement).css('left', jsEvent.clientX + 10);
        $(this.tooltip.nativeElement).show();
      },
      eventMouseout: (event: CalendarEvent, jsEvent: MouseEvent, view: Default) => {
        $(this.tooltip.nativeElement).hide();
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
