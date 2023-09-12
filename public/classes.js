"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
// invoices.push({ name: 'shaun' });
console.log(invoices);
const formClass = document.querySelector('.new-item-form');
console.log(formClass.children);
// inputs
const typeF = document.querySelector('#type');
const tofromF = document.querySelector('#tofrom');
const detailsF = document.querySelector('#details');
const amountF = document.querySelector('#amount');
formClass.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(typeF.value, tofromF.value, detailsF.value, amountF.valueAsNumber);
});
