function addDelivery() {
    const destinationInput = document.querySelector('#destination');
    const priceInput = document.querySelector('#price');
    const customerInput = document.querySelector('#customer');
    const deliveryTable = document.querySelector('#delivery-table');
  
    if (!destinationInput.value || !priceInput.value || !customerInput.value) {
      alert("Please fill in all fields!");
      return;
    }
  
    const newRow = deliveryTable.insertRow();
    const destinationCell = newRow.insertCell();
    const priceCell = newRow.insertCell();
    const customerCell = newRow.insertCell();
    
    destinationCell.textContent = destinationInput.value;
    priceCell.textContent = priceInput.value;
    customerCell.textContent = customerInput.value;
  
    destinationInput.value = "";
    priceInput.value = "";
    customerInput.value = "";
  }
  