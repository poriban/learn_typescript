"use strict";
// let greet: Function;
let greets;
greets = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === 'add') {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetailes;
logDetailes = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
