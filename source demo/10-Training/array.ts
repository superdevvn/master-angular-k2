let a: number[] = [5, 2, 3, 4];
let b: number[] = [2, 4, 1];
function sort(array: Array<number>) {
    return array.sort((current, next) => current - next);
}

let sum = (array: Array<number>) => array.reduce((previous, current) => {
    console.log('Previous: ' + previous);
    console.log('Current: ' + current);
    console.log('***********************');
    return previous + current;
}, 0);

function checkLTSix(array: number[]): boolean {
    // return array.every(value => value < 6);
    return !array.some(value => value >= 6);
}

function combine(a: number[], b: number[]): number[] {
    return [...a, ...b];
}

function sum2(...array: number[]) {
    return array.reduce((previous, current) => {
        return previous + current;
    }, 0);
}

// console.log(sort(a));
// console.log(sum(a));
// console.log(checkLTSix(a));
// console.log(combine(a, b));
// console.log(sum2(10, 20, 10, 30));
console.log(sum2(...a, 10));
console.log(a);
console.log(...a);