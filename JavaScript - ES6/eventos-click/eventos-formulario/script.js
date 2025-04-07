document.addEventListener('DOMContentLoaded', (event) => {
const btn = document.querySelector('.botao1');
const para = document.querySelector('.paragrafo');

function twoClick() {
  para.textContent = 'Texto Alterado'
}

btn.addEventListener('dblclick', twoClick);

const div = document.querySelector('.div1');
const para2 = document.querySelector('.paragrafo2');

function move() {
  this.style.backgroundColor = 'red';
  para2.textContent = 'O mouse está se movendo!';
}

function moveout() {
  this.style.backgroundColor = '#fff';
  para2.textContent = 'O mouse saiu!';
}

div.addEventListener('mouseenter', move);
div.addEventListener('mouseleave', moveout);

const form = document.querySelector('form')
const nome = document.getElementById('inome')
const email = document.getElementById('imail')
const senha = document.getElementById('isenha')

function envio(event) {
  if(nome.value === "" || email.value === "" || senha.value === "") {
    alert('Por favor, preencha todos os campos.');
    event.preventDefault();
  } else {
    alert('Formulário enviado com sucesso!')
  }
}

form.addEventListener('submit', envio);

const idade = document.getElementById('age');
const mensagem = document.querySelector('.message');

function idadeChange(event) {
  let age = this.value;
  if(age < 18) {
    mensagem.textContent = 'Você deve ter 18 anos ou mais para se inscrever!';
    this.style.border = '1px solid red'
  } else {
    mensagem.textContent = 'Idade aceita!'
  }
}

idade.addEventListener('change', idadeChange);

const senha2 = document.getElementById('password');
const para3 = document.querySelector('.mensagemForte');
function senhaForte() {
  let password = this.value
  para3.style.width = '300px'
  if(password.length < 6) {
    para3.textContent = 'Senha muito curta!'
    para3.style.backgroundColor = 'red'
  } else if(password.length <= 10) {
    para3.textContent = 'Senha aceitável'
    para3.style.backgroundColor = 'orange'
  } else {
    para3.textContent = 'Senha forte!'
    para3.style.backgroundColor = 'green'
  }
}

senha2.addEventListener('input', senhaForte);

const usernameField = document.getElementById('usuario');
const helpText = document.querySelector('.helpText');

function textHelpFocus() {
  helpText.style.display = 'block';
}

function textHelpBlur() {
  helpText.style.display = 'none';
}

usernameField.addEventListener('focus', textHelpFocus);
usernameField.addEventListener('blur', textHelpBlur);

const formulario = document.getElementById('myForm');

function resetar() {
  alert('O formulário foi resetado!')
}

formulario.addEventListener('reset', resetar)
});


