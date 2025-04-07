// Exercício 1: Exibindo o Comprimento de uma String
// Crie uma página que receba uma string e exiba quantos caracteres ela possui.

// Adicione um campo de texto (<input>) e um botão.
// Ao clicar no botão, capture o valor do input.
// Mostre o comprimento da string em um parágrafo (<p>) usando o método .length.

const input1 = document.getElementById('input1');
const btn = document.querySelector('.div1 button');
const paragraph1 = document.querySelector('.para');

function comprimento() {
  const inputValue = input1.value.length;
  paragraph1.innerText = `Quantidade de caracteres: ${inputValue}`;
}

btn.addEventListener('click', comprimento);

// Exercício 2: Convertendo Texto para Maiúsculas
// Crie um programa que converta o conteúdo de uma caixa de texto para letras maiúsculas e exiba o resultado.

// Adicione um campo de texto (<input>) e um botão.
// Ao clicar no botão, capture o valor do input.
// Converta o texto para maiúsculas usando .toUpperCase() e exiba o resultado em um parágrafo (<p>).
// Dicas:

// Use input.value.toUpperCase() para transformar o texto em letras maiúsculas.

const input2 = document.getElementById('input2');
const btn2 = document.querySelector('.div2 button');
const paragraph2 = document.querySelector('.para2');

function uppercase() {
  const input = input2.value.toUpperCase();
  paragraph2.innerText = input;  
}

btn2.addEventListener('click', uppercase);

// Exercício 3: Verificando a Presença de uma Palavra
// Escreva uma função que verifique se uma palavra específica está presente em um parágrafo.

// Crie um parágrafo (<p>) com um texto.
// Adicione um campo de texto e um botão.
// Ao clicar no botão, verifique se o parágrafo contém a palavra inserida usando o método .includes().
// Exiba uma mensagem de confirmação (palavra encontrada ou não) em um novo parágrafo.
// Dicas:

// Use paragrafo.innerText.includes(input.value) para verificar a presença da palavra.

const input3 = document.getElementById('input3');
const btn3 = document.querySelector('.div3 button');
const paragraph3 = document.querySelector('.para3');
const span = document.querySelector('.div3 span');

function stringIncludes() {
  const input = input3.value.toLowerCase();
  const para = span.textContent.toLowerCase();
  const paraText = para.includes(input)
  if(paraText) {
     paragraph3.innerText = 'Palavra encontrada!';
  } else {
    paragraph3.innerText = 'Palavra não encontrada!';
  }
}

btn3.addEventListener('click', stringIncludes);

// Exercício 5: Extraindo uma Parte da String
// Crie um programa que receba uma string e extraia uma parte dela usando o método .substring().

// Adicione um campo de texto para a string principal e dois campos de texto para inserir os índices de início e fim do corte.
// Adicione um botão para extrair a substring.
// Ao clicar no botão, capture os valores e exiba a parte cortada da string em um parágrafo (<p>).
// Dicas:

// Use input.value.substring(startIndex, endIndex) para extrair a substring.

const input4 = document.getElementById('input4');
const inputNumber1 = document.getElementById('number');
const inputNumber2 = document.getElementById('number2');
const btn4 = document.querySelector('.div4 button');
const paragraph4 = document.querySelector('.para4');

function substring() {
  const value1 = inputNumber1.value;
  const value2 = inputNumber2.value;
  const input = input4.value.substring(value1, value2);
  paragraph4.textContent = `Palavra cortada: ${input}`
}

btn4.addEventListener('click', substring);