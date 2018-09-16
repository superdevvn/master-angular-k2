// var hello = function(firstName: string, lastName:string | number){
//     alert(`Hello ${firstName} ${lastName}`);
// }
// hello('Supper','Dev');
//de mo ghi chu


class Person{
    firstName : string;
    lastName: string;
    age:number;
}
var hello = function(person:Person){
    var {firstName, lastName,age} = person;
    alert(`Hello ${firstName} ${lastName} ${age} years old`);
}

hello({
    firstName:'Super',
    lastName:'Dev',
    age: 18
});

var hello2 = function({firstName, lastName,age}:Person){
   
    alert(`Hello ${firstName} ${lastName} ${age} years old`);
}

    var person = new Person();
    person.firstName = 'Super';
    person.lastName = 'Dev';
    person.age = 18;

hello2(person);