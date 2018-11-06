export interface barChartOption {
    title: string,
    data:{
        xTitle: string[],
        items:{
            label:string,
            values:number[],
            color?:string,
        }[]
    }
}