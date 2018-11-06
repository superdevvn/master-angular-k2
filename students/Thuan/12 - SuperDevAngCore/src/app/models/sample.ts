export class Person{}

export interface BasePerson{
    firstname:string;
    lastname:string;
}
export interface Teacher extends BasePerson{
    type:'teacher',
    hsl:number,
}
export interface Developer extends BasePerson{
    type:'developer',
    experience:number,
}