var hello4 = function (firstName, lastName) {
    console.log(firstName, lastName);
};
hello4('Super', 'Dev');
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var hello = function (person) {
    var firstName = person.firstName, lastName = person.lastName, age = person.age;
    alert("Hello " + firstName + " " + lastName + " " + age + " years old");
};
hello({
    firstName: 'Super',
    lastName: 'Dev',
    age: 18
});
var hello2 = function (_a) {
    var firstName = _a.firstName, lastName = _a.lastName, age = _a.age;
    alert("Hello " + firstName + " " + lastName + " " + age + " years old");
};
var person = new Person();
person.firstName = 'Super';
person.lastName = 'Dev';
person.age = 18;
hello2(person);
var Person1 = (function () {
    function Person1() {
    }
    return Person1;
}());
function hello3(firstName, lastName) {
    var person = { firstName: firstName, lastName: lastName };
    console.log(person);
}
hello3('Super', 'dev');
//# sourceMappingURL=buil.js.map