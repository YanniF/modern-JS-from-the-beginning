document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
  const name = document.getElementById('name');
  const re = /^[a-zA-Z]{2,10}$/;

  validateRE(name, re);
}

function validateZip() { //CEP 00000-000
  const zip = document.getElementById('zip');
  const re = /^[0-9]{5}(-)?[0-9]{3}$/; //5 numbers, optional -, 3 numbers
  
  validateRE(zip, re);
}

function validateEmail() {
  const email = document.getElementById('email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  validateRE(email, re);
}

function validatePhone() {
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;
  
  validateRE(phone, re);
}

function validateRE(input, re) {
  if(!re.test(input.value)) {
    input.classList.add('is-invalid');
  }
  else {
    input.classList.remove('is-invalid');
  }
}