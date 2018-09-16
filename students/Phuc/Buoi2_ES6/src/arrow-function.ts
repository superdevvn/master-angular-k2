var hello4 = (firstName:string, lastName:string) =>{
    console.log(firstName,lastName);
}

hello4('Super','Dev');

class Person4{
    
    call(hello:Function){
        var person = new Person5();
      
        hello('Super','Dev');
    }
}

class Person5{
    hello =(firstName:string, lastName:string) =>{
        console.log(this);
        console.log(firstName,lastName);
    }
}

var person4 = new Person4()