// Exercício 1: Manipulando Propriedades de um Objeto e Atualizando o DOM
// Enunciado:
// Crie um objeto carro com as propriedades marca, modelo e ano. Adicione uma função que, ao clicar em um botão, exiba no DOM os valores dessas propriedades dentro de um parágrafo (<p>).

const btn = document.querySelector('button');
const para = document.getElementById('message');

carro = {
  marca: 'Chevrolet',
  modelo: 'Celta',
  ano: 2015
}

function exibirObjeto() {
  para.innerText = `Marca: ${carro.marca}, Modelo: ${carro.modelo}, Ano: ${carro.ano}`;
}

btn.addEventListener('click', exibirObjeto);
