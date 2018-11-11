import { Moment } from "moment";

export interface CalendarOption{
    getTooltipInfos?: ((calendarEvent: CalendarEvent) => TooltipInfo[])
}

export interface CalendarEvent{
    id?:string,
    resourceId?: string,
    title: string,
    start?: Date | string | number | Moment,
    end?: Date | string | number | Moment,
    data?: any    
}

export interface TooltipInfo{
    title: string,
    value: string
}