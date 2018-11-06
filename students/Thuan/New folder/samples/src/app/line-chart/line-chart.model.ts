export interface lineChartOption {
    title: string,
    data:{
        xTitle: string[],
        items:{
            label:string,
            values:number[],
            color?:string,
            fill:boolean
        }[]
    }
}