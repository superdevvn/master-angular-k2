export declare type Person = Teacher | Developer;

export interface BasePerson {
    firstName: string,
    lastName: string
}

export interface Teacher extends BasePerson {
    type: 'teacher',
    hsl: number
}

export interface Developer extends BasePerson {
    type: 'developer',
    experience: number;
}