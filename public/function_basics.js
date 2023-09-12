"use strict";
let greet = () => {
    console.log('hello, world');
};
// greet = 'hello';
greet = () => {
    console.log('hello, again');
};
const addtions = (a, b, c /*?*/ = 10) => {
    console.log(a + b);
    console.log(c);
};
addtions(5, 10, '20');
const minustions = (a, b) => {
    return a + b;
};
let minus_result = minustions(10, 7);
console.log(minus_result);
