let greet: Function = () => {
    console.log('hello, world');
}

// greet = 'hello';

greet = () => {
    console.log('hello, again');
}

const addtions = (a: number, b: number, c/*?*/: number | string = 10): void => {
    console.log(a + b);
    console.log(c);
}
  
addtions(5, 10, '20');

const minustions = (a: number, b: number): number => {
    return a + b;
}

let minus_result = minustions(10,7);
console.log(minus_result);