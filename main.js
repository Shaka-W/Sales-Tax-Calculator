const amount = document.querySelector('#amount');
const salesTax = document.querySelector('#sales-tax');
const outputAmount = document.querySelector('.output');
const btnCalculate = document.querySelector('.btn-calculate');

btnCalculate.addEventListener('click', (e) => {
  e.preventDefault();

  let amountInput = Number(amount.value);
  let salesTaxInput = Number(salesTax.value);
  outputAmount.textContent = 'After Tax Price: ' + '$' + (amountInput + amountInput * (salesTaxInput / 100)).toFixed(2);
});