let ageA: any = 25;

ageA = true;
console.log(ageA);
ageA = 'hello';
console.log(ageA);
ageA = { name: 'luigi' };
console.log(ageA);

let mixedA: any[] = [];

mixedA.push(5);
mixedA.push('mario');
mixedA.push(false);
console.log(mixedA);

let ninja: { name: any, age: any };

ninja = { name: 'yoshi', age: 25 };
console.log(ninja);

ninja = { name: 25, age: 'yoshi' };
console.log(ninja);