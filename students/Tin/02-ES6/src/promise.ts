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