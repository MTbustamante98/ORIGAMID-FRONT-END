document.addEventListener('DOMContentLoaded', (event) => {
// Exercício 1: Criação de Botões Dinâmicos
// Descrição: Crie uma constructor function chamada ButtonCreator que receba um texto, uma cor de fundo, e uma função de clique como parâmetros. Essa função deve criar um botão (<button>) com o texto e a cor de fundo especificados e adicionar um evento de clique que executa a função passada. Adicione o botão criado ao corpo do documento.

function ButtonCreator(text, bgColor, onClick) {
  this.button = document.createElement('button');
  this.button.innerHTML = text;
  this.button.style.backgroundColor = bgColor;
  this.button.addEventListener('click', onClick);
  document.body.appendChild(this.button)
}
const alertButton = new ButtonCreator('Clique em mim', '#fff', () => alert('Botão clicado!'))

// Exercício 2: Manipulação de Parágrafos
// Descrição: Crie uma constructor function chamada ParagraphManager que receba um texto inicial e uma cor de texto como parâmetros. A função deve criar um parágrafo (<p>) com o texto e a cor especificados. Adicione um método changeText(newText) que permite alterar o texto do parágrafo.;

function ParagraphManager(textoInicial, CorTexto) {
  this.paragraph = document.createElement('p');
  this.paragraph.innerText = textoInicial;
  this.paragraph.style.color = CorTexto;
  document.body.appendChild(this.paragraph);
  this.changeText = function(newText) {
    this.paragraph.innerText = newText;
  }
}

const Text = new ParagraphManager('Texto inicial', '#000')
// Text.changeText('....')

// Exercício 3: Gerenciador de Listas
// Descrição: Crie uma constructor function chamada ListManager que receba uma lista de itens como parâmetro. A função deve criar uma lista não ordenada (<ul>) e adicionar cada item da lista como um item (<li>). Adicione um método addItem(item) que permite adicionar novos itens à lista.

function ListManager(ListaItens) {
  this.listaUL = document.createElement('ul');
    ListaItens.forEach(item => {
    let LI = document.createElement('li');
    LI.innerText = item;
    this.listaUL.appendChild(LI)
  })
  document.body.appendChild(this.listaUL);0

  this.addItem = function(item) {
    let LI = document.createElement('li');
    LI.innerText = item;
    this.listaUL.appendChild(LI)
  }
}

const listaTimes = new ListManager(['Manchester United', 'Milan', 'Bayern Munich'])
listaTimes.addItem('Liverpool')

// Exercício 4: Criação de Input Dinâmico
// Descrição: Crie uma constructor function chamada InputCreator que receba um tipo de input (como "text", "number", "email", etc.) e um valor inicial como parâmetros. A função deve criar um elemento <input> com o tipo e o valor especificados e adicionar esse input ao corpo do documento. Adicione um método updateValue(newValue) para alterar o valor do input.

function InputCreator(type, initialValue) {
  this.input = document.createElement('input');
  this.input.type = type;
  this.input.value = initialValue;
  document.body.appendChild(this.input)
  this.updateValue = function(newValue) {
    input.input.value = newValue;
  }
 }
 const inputElement = new InputCreator('text', 'texto');

//  Exercício 5: Toggler de Visibilidade
//  Descrição: Crie uma constructor function chamada VisibilityToggler que receba um seletor de um elemento DOM como parâmetro. A função deve selecionar o elemento e adicionar um método toggle() que alterna a visibilidade do elemento (mostra/esconde).

function VisibilityToggler(seletor) {
  this.element = document.querySelector(seletor);
  this.toggle = function() {
    if (this.element.style.display === 'none') {
      this.element.style.display = '';
    } else {
      this.element.style.display = 'none';
    };
  }
}

const toggler = new VisibilityToggler('#meuElemento');
// toggler.toggle();
});