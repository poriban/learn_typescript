"use strict";
// classes
class Invoices {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
const invOneF = new Invoices('mario', 'work on the mario website', 250);
const invTwoF = new Invoices('luigi', 'work on the luigi website', 300);
let invoicesF = [];
invoicesF.push(invOneF);
invoicesF.push(invTwoF);
invoicesF.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});
const formE = document.querySelector('.new-item-form');
console.log(formE.children);
// inputs
const typeE = document.querySelector('#type');
const tofromE = document.querySelector('#tofrom');
const detailsE = document.querySelector('#details');
const amountE = document.querySelector('#amount');
formE.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(typeE.value, tofromE.value, detailsE.value, amountE.valueAsNumber);
});
