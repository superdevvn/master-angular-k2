function demo1(){
    var x = 0;
    {
        var x = 1;
    }
    {
        var x = 2;
        {
            var x =3;
        }
        console.log(x);
    }
    console.log(x);
}

function demo2(){
    let x = 0;
    {
        let x = 1;
    }
    {
        let x = 2;
        {
            let x =3;
            console.log(x);
        }
        console.log(x);
    }
    console.log(x);
}

function demo3(){
    const x = 1;
    // x = 2;
}

demo1();
demo2();