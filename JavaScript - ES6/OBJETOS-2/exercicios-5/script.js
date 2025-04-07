// Exercício 4: Adicionando Métodos a Objetos e Manipulando o DOM
// Enunciado:
// Crie um objeto usuario com as propriedades nome e email e um método exibirInfo que retorna uma string com essas informações. Adicione um botão na página que, ao ser clicado, exibe as informações do usuário no DOM.

// Instruções:

// Crie o objeto usuario com as propriedades e o método.
// Insira um botão "Mostrar Usuário".
// Ao clicar no botão, as informações devem ser exibidas no DOM em um parágrafo.
const btn = document.querySelector('button');
const para = document.querySelector('p');

const usuario = {
  nome: 'Matheus',
  email: 'matheusBP@gmail.com',
  exibirInfo() {
    return `Nome: ${this.nome} - Email: ${this.email}`;
  } 
};

function exibirInfo() {
  para.textContent = usuario.exibirInfo();
}

btn.addEventListener('click', exibirInfo);
