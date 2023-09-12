// classes
class Invoice {
    client: string;
    details: string;
    amount: number;
  
    constructor(c: string, d: string, a: number){
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
  
let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);
// invoices.push({ name: 'shaun' });
  
console.log(invoices);
  
  
const formClass = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(formClass.children);
  
// inputs
const typeF = document.querySelector('#type') as HTMLInputElement;
const tofromF = document.querySelector('#tofrom') as HTMLInputElement;
const detailsF = document.querySelector('#details') as HTMLInputElement;
const amountF = document.querySelector('#amount') as HTMLInputElement;
  
formClass.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    console.log(
        typeF.value, 
        tofromF.value, 
        detailsF.value, 
        amountF.valueAsNumber
    );
});