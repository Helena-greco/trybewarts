const login = document.getElementById('login');
const password = document.getElementById('password');
const button = document.getElementById('submit-button');

function loginAlert() {
  if (login.value !== 'tryber@teste.com' && password.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
}

button.addEventListener('click', loginAlert);
