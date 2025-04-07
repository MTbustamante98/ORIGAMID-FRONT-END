
const paragrafo = document.querySelector('p');

function atualizarNome() {
  let nome = prompt('Insira um novo nome');
  paragrafo.textContent = 'Jogador 1: ' + nome;
}

paragrafo.addEventListener("click", atualizarNome)

function criarParagrafo() {
  let para = document.createElement("p");
  para.textContent = 'Você clicou no botão';
  document.body.appendChild(para)
}

const botoes = document.querySelectorAll('button')

for(let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', criarParagrafo)
}

//<script src="script.js" defer></script>
//No exemplo externo, nós usamos um recurso moderno do JavaScript para resolver esse problema: Trata-se do atributo defer, que informa ao browser para continuar renderizando o conteúdo HTML uma vez que a tag <script> foi atingida.

const section = document.querySelector('section')

// const posicao = section.getBoundingClientRect()

const accordionList = document.querySelectorAll('.js-accordion dt');
if(accordionList.length) {
  accordionList[0].classList.add('ativo')
  accordionList[0].nextElementSibling.classList.add('ativo')
}

function activeAccordion() {
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item) => {
  item.addEventListener('click', activeAccordion)
})