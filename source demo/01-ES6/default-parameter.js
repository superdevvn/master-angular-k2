function hello1(color, score) {
    color = color || 'red';
    score = score || 20;
    console.log('Color: ' + color);
    console.log('Score: ' + score);
}

// hello1();
// hello1('blue');
// hello1('blue', 50);
// hello1('blue', 0);
// hello1(null);
// hello1('');
// hello1(0);
// hello1(false);
// hello1(NaN);
// console.log(parseInt('abcd'));

var hello2 = function (color = 'red', score = 20) {
    console.log('Color: ' + color);
    console.log('Score: ' + score);
}

// hello2();
// hello2('blue');
// hello2('blue', 50);
// hello2('blue', 0);
// hello2(null);
// hello1('');
// hello1(0);
// hello1(false);
// hello2(NaN);
// hello2(undefined);

var hello3 = (param1, param2, param3) => {
    param = param1 || param2 || param3 || 'SuperDev';
   // console.log('Param: ' + param);
}

// hello3();
// hello3(0, null, 10);
// hello3(0, null, '');
// hello3(0, 'Facebook', '');

function hello4(a, b) {
    console.log('!a: ' + !a);
    console.log('!b: ' + !b);
    console.log('==:' + (a == b));
    console.log('===:' + (a === b));
}

// hello4(undefined, null);
// hello4(undefined, 0);
// hello4(null, false);
// hello4(0, false);
// hello4(null, NaN);

function hello5(flag){
    if(flag){
        console.log('AAA');
    } else {
        console.log('BBB');
    }
}

// hello5('2');
hello5('0');
