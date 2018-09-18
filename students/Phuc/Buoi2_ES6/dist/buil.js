function func01(name, age) {
    return "func01 My name is " + name + ", " + age + " years old";
}
var func02 = function (name, age) {
    return "func02 My name is " + name + ", " + age + " years old";
};
var func03 = function (name, age) {
    return "func03 My name is " + name + ", " + age + " years old";
};
var func04 = function (name, age) { return "func04 My name is " + name + ", " + age + " years old"; };
var func05 = function (name) {
    return "func05 My name is " + name;
};
var courses = ["Android", "Java", "PHP", "Angular"];
console.log(courses.map(function (course) {
    return course.toUpperCase();
}));
//# sourceMappingURL=buil.js.map