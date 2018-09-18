// var demoPromise = () => {

//     var interval = 0;
//     setInterval(() => {
//         interval++;
//     }, 1000);

//     a().then(() => {
//         b().then(()=>{
//             c();
//         });
//     });

//     // a();
//     // b();
//     // c();

    // a().then(() => {
    //     b().then(() => {
    //         console.log('Interval: ' + interval);
    //     });

    // });
    // c().then(() => {
    //     console.log('Interval: ' + interval);
    // });

    // a().then((value) => {
    //     console.log(value);
    //     b().then(() => {
    //         console.log('Interval: ' + interval);
    //         c().then(() => {
    //             console.log('Interval: ' + interval);
    //         });
    //     });
       
    //  });
//};

// var a = () => {
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             console.log('AAA');
//             resolve('SuperDev');
//         }, 2000);
//     });
// }

// var b = () => {
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             console.log('BBB');
//             resolve();
//         }, 3000);
//     });
// }

// var c = () => {
//     return new Promise(function (resolve) {
//         setTimeout(() => {
//             console.log('CCC');
//             resolve();
//         }, 1000);
//     });
// }

// demoPromise();