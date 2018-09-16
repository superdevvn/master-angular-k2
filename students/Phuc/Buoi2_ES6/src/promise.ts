var demoPromise = () =>{
    a();
    b();
    c();
}
    var a=()=>{
        return new Promise(resolve)=>{
            setTimeout(() => {
                console.log('AAA');
                resolve();
            }, 2000);
        }
        
    }
    var b =()=>{
        setTimeout(() => {
            console.log('BBB');
        }, 3000);
    }
    var c =() =>{
        setTimeout(() => {
            console.log('CCC');
        }, 1000);
    }

    demoPromise();

