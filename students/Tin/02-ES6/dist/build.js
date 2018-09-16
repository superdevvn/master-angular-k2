// var hello4 = (firstName: string, lastName: string) => {
//     console.log(firstName, lastName);
// }
// hello4('Super', 'Dev');
// class Person3 {
//     call(hello: Function){
//         hello('Super', 'Dev');
//     }
// }
// class Person4 {
//     hello = function (firstName: string, lastName: string) {
//         console.log(this);
//         console.log(firstName, lastName);
//     }
// }
// var person3 = new Person3();
// var person4 = new Person4();
// person3.call(person4.hello);
// person4.hello('Super', 'Dev');
// // var hello = function (firstName: string, lastName: string | number){
// //     alert(`Hello ${firstName} ${lastName}`)
// // }
// // hello('Super', 123)
// class Person {
//     firstName: string;
//     lastName: string;
//     age: number;
// }
// var hello = function (person: Person) {
//     var { firstName, lastName, age} = person;
//     alert(`Hello ${firstName} ${lastName} ${age} years old`)
// }
// hello({
//     firstName: 'Super',
//     lastName: 'Dev',
//     age: 18
// });
// var hello2 = function ({ firstName, lastName, age}: any) {
//     alert(`Hello ${firstName} ${lastName} ${age} years old`)
// }
// var person = new Person();
// person.firstName = 'Super';
// person.lastName = 'Dev';
// person.age = 18;
// hello2(person);
// class Person1 {
//     firstName: string;
//     lastName: string;
// }
// function hello3(firstName: string,lastName: string ){
//     var person = {firstName, lastName};
//     console.log(person);
// }
// hello3('Super','Dev')
function demo1() {
    var x = 0;
    {
        var x = 1;
    }
    {
        var x = 2;
        {
            var x = 3;
        }
    }
    console.log(x);
}
function demo2() {
    var x = 0;
    {
        var x_1 = 1;
    }
    {
        var x_2 = 2;
        {
            var x_3 = 3;
        }
    }
    console.log(x);
}
function demo3() {
    var x = 1;
    //x = 2;
}
demo1();
demo2();
demo3();
// var demoPromise = () => {
//     a().then(() => {
//         b();
//     });
//     c();
// };
// var a = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('AAA');
//             resolve();
//         }, 2000);
//     })
// }
// var b = () => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('BBB');
//             resolve();
//         }, 3000);
//     })
// }
// var c = () => {
//     setTimeout(() => {
//         console.log('CCC')
//     }, 1000);
// }
// demoPromise();
//# sourceMappingURL=build.js.map