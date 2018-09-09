function hello(firstName, lastName) {
    console.log('Hello ' + firstName + ' ' + lastName + '\nnice to meet you\n\tABC'); // ES5
    console.log(`Hello ${firstName} ${lastName}
nice to meet you!
    ABC`); // ES6
}

hello('Super', 'Dev');