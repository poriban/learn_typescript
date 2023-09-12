// let greet: Function;

let greets: (a: string, b: string) => void;

greets = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
        return numOne + numTwo;
    } else {
        return numOne - numTwo;
    }
}

// example 3
let logDetailes: (obj: {name: string, age: number}) => void;

logDetailes = (ninja: {name: string, age: number}) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}