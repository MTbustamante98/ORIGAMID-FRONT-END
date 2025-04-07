// Exercício 2: Atualizando Propriedades de Objetos a partir de Inputs
// Enunciado:
// Crie um objeto pessoa com as propriedades nome e idade. Adicione dois inputs na página para que o usuário possa atualizar o nome e a idade da pessoa. Ao clicar em um botão, atualize as propriedades do objeto e exiba os novos valores no DOM.

const btn = document.querySelector('button');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const para = document.querySelector('p');

pessoa = {
  nome: undefined,
  idade: undefined 
}

function atualizarObjeto() {
  pessoa.nome = input1.value;  
  pessoa.idade = input2.value;
  para.innerText = `Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`
}  

btn.addEventListener('click', atualizarObjeto);