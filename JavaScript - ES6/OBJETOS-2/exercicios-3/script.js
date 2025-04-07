// Exercício 3: Usando Propriedades Dinâmicas de Objetos
// Enunciado:
// Crie um objeto produto com as propriedades nome, preco e estoque. Adicione um input onde o usuário pode inserir o nome de uma propriedade (por exemplo, "preco") e, ao clicar em um botão, exiba o valor dessa propriedade no DOM.

// Instruções:

// Crie um objeto produto com as propriedades mencionadas.
// Insira um campo de input para o usuário digitar o nome de uma propriedade.
// Ao clicar no botão "Buscar valor", exiba o valor da propriedade correspondente no DOM.

const btn = document.querySelector('button');
const input = document.getElementById('input1');
const para = document.querySelector('p');

const produto = {
  nome: 'Televisor 44" LED 4K',
  preco: 1.75655,
  estoque: 10
}

function exibirPropriedade() {
  const inputValor = input.value;
  if (produto.hasOwnProperty(inputValor)) {
    para.innerText = `${inputValor}: ${produto[inputValor]}`
  } else {
    para.innerText = `A propriedade ${inputValor} não existe no produto`
  }
}

btn.addEventListener('click', exibirPropriedade);

