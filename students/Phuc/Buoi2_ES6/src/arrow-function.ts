// var hello4 = (firstName:string, lastName:string) =>{
//     console.log(firstName,lastName);
// }

// hello4('Super','Dev');

// class Person4{
    
//     call(hello:Function){
//         var person = new Person5();
      
//         hello('Super','Dev');
//     }
// }

// class Person5{
//     hello =(firstName:string, lastName:string) =>{
//         console.log(this);
//         console.log(firstName,lastName);
//     }
// }

// var person4 = new Person4()



function func01(name:string, age:string|number){
    return `func01 My name is ${name}, ${age} years old`
}
//console.log(func01("john",45));

var func02 = function(name:string, age:string|number){
    return `func02 My name is ${name}, ${age} years old`
}
//console.log(func02('Tom', 30));

var func03 = (name:string, age:string|number) =>{
    return `func03 My name is ${name}, ${age} years old`
}
//console.log(func03('Tom3', 30));

var func04 = (name:string, age:string|number) => `func04 My name is ${name}, ${age} years old`

//console.log(func04('Tom4', 30));

var func05 = (name:string) => {
    return `func05 My name is ${name}`;
}
//console.log(func05('Tom5'));    

let courses =["Android", "Java", "PHP", "Angular"];
console.log(
    courses.map(course =>{
        return course.toUpperCase();
    })
);

// let scores = [9,2,8,4,7,3,1,8];

// scores.sort(
//     (x, y) => x > y ? true : false;
// );