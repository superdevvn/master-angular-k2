export interface CalendarOption{

}

export interface CalendarEvent{
    id?:string,
    resourceId?: string,
    title: string,
    start?: Date | string,
    end?: Date | string,
    data?: any
}