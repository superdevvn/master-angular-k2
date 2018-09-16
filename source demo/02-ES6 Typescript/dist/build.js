var Person = (function () {
    function Person() {
    }
    return Person;
}());
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
demo1();
demo2();
//# sourceMappingURL=build.js.map