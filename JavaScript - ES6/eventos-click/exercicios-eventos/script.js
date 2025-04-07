document.addEventListener('DOMContentLoaded', (event) => {

const btn = document.querySelector('.botao');
const para = document.querySelector('.para1');

function handleClick(event) {
  para.textContent = 'Texto alterado pelo JavaScript'
}

btn.addEventListener('click', handleClick);

const div = document.querySelector('.div');

function enter(event) {
  event.target.style.backgroundColor = 'red'
}

function exit(event) {
  event.target.style.backgroundColor = 'initial'
}

div.addEventListener('mouseenter', enter);
div.addEventListener('mouseout', exit);

const botao = document.querySelector('.divisao .contadorBotao');
let contador = document.querySelector('.contador');
contagem = 0;
function clickHandle(event) {
  contagem++;
  contador.textContent = contagem;
}

botao.addEventListener('click', clickHandle);

const btn2 = document.querySelector('.botao2');
const para2 = document.querySelector('.ocultar');

function ocultar() {
  if(para2.style.display === 'none') {
    para2.style.display = 'block';
  } else {
    para2.style.display = 'none';
  }
}

btn2.addEventListener('click', ocultar);

const paragrafo = document.querySelector('.paragrafo');
const nome = document.getElementById('inome');
const sobreNome = document.getElementById('lnome');
const form = document.querySelector('form');

function clickSubmit(event) {
  if(nome.value === "" || sobreNome === "") {
    event.preventDefault();
    paragrafo.textContent = 'Você precisa preencher todos os campos acima!'
  }
}

form.addEventListener('submit', clickSubmit);
});
