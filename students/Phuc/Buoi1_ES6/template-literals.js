function hello(firstName, lastName){
   console.log('Hello '+firstName+ '' + lastName + '\n nice to meet you'); //ES5
    console.log(`Hello ${firstName} ${lastName}
nice to meet you
 ABC`); //ES6
}
hello('Super', 'Dev');