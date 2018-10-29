var a = [5, 2, 3, 4];
var b = [2, 4, 1];
function sort(array) {
    return array.sort(function (current, next) { return current - next; });
}
var sum = function (array) { return array.reduce(function (previous, current) {
    console.log('Previous: ' + previous);
    console.log('Current: ' + current);
    console.log('***********************');
    return previous + current;
}, 0); };
function checkLTSix(array) {
    // return array.every(value => value < 6);
    return !array.some(function (value) { return value >= 6; });
}
function combine(a, b) {
    return a.concat(b);
}
function sum2() {
    var array = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        array[_i] = arguments[_i];
    }
    return array.reduce(function (previous, current) {
        return previous + current;
    }, 0);
}
// console.log(sort(a));
// console.log(sum(a));
// console.log(checkLTSix(a));
// console.log(combine(a, b));
// console.log(sum2(10, 20, 10, 30));
console.log(sum2.apply(void 0, a.concat([10])));
console.log(a);
console.log.apply(console, a);
