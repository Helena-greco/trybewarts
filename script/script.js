const login = document.getElementById('login');
const password = document.getElementById('password');
const submitButton = document.getElementById('submit-button');
const submitBtn = document.getElementById('submit-btn');
const checkboxAgreement = document.getElementById('agreement');

function loginAlert() {
  if (login.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

function enableSubmitBtn() {
  if (checkboxAgreement.checked) {
    submitBtn.removeAttribute('disabled');
  } else {
    submitBtn.setAttribute('disabled', 'disabled');
  }
}

submitButton.addEventListener('click', loginAlert); // botão submit
checkboxAgreement.addEventListener('click', enableSubmitBtn);
