// classes
class Invoices {
    // readonly client: string;
    // private details: string;
    // public amount: number;
  
    constructor(
        readonly client: string, 
        private details: string, 
        public amount: number,
    ){}
  
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
  
const invOneF = new Invoices('mario', 'work on the mario website', 250);
const invTwoF = new Invoices('luigi', 'work on the luigi website', 300);

let invoicesF: Invoices[] = [];
invoicesF.push(invOneF)
invoicesF.push(invTwoF);

invoicesF.forEach(inv => {
    console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});

const formE = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(formE.children);
  
// inputs
const typeE = document.querySelector('#type') as HTMLInputElement;
const tofromE = document.querySelector('#tofrom') as HTMLInputElement;
const detailsE = document.querySelector('#details') as HTMLInputElement;
const amountE = document.querySelector('#amount') as HTMLInputElement;

formE.addEventListener('submit', (e: Event) => {
    e.preventDefault();
  
    console.log(
      typeE.value, 
      tofromE.value, 
      detailsE.value, 
      amountE.valueAsNumber
    );
});