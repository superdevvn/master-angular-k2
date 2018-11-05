export interface BarChartOption{
    title: string,
    data: {
        xTitles: string[],
        items: {
            label: string,
            color?: string,
            values: number[]
        }[]
    }
}