const form = document.querySelector('form');
const table = document.querySelector('table');
const tbody = document.querySelector('#delivery-table');
const inputs = document.querySelectorAll('input');

function addDelivery() {
  const destinationInput = document.querySelector('#destination');
  const priceInput = document.querySelector('#price');
  const customerInput = document.querySelector('#customer');

  // Create new row and cells
  const newRow = tbody.insertRow();
  const destinationCell = newRow.insertCell();
  const priceCell = newRow.insertCell();
  const customerCell = newRow.insertCell();

  // Add input values to cells
  destinationCell.textContent = destinationInput.value;
  priceCell.textContent = priceInput.value;
  customerCell.textContent = customerInput.value;

  // Clear input fields
  inputs.forEach(input => input.value = "");
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addDelivery();
});
