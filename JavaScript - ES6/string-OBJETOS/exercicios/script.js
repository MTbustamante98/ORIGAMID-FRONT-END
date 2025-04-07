// Exercício 1: Contando Palavras em um Parágrafo
// Escreva uma função que conte quantas palavras estão presentes em um parágrafo exibido no DOM.
// Crie um parágrafo (<p>) no HTML com um texto qualquer.
// Use JavaScript para capturar o texto do parágrafo.
// Divida a string em palavras e exiba a quantidade de palavras em um novo elemento <span> abaixo do parágrafo.
// Dicas:
// Use .innerText para capturar o conteúdo do parágrafo.
// Divida a string em um array usando o método .split(' ').

const paragraph1 = document.getElementById('paragraph1');
const span = document.getElementById('span');

const para = paragraph1.innerText;
let paragraphSplit = para.split(' ');
span.innerText = `Quantidade de palavras: ${paragraphSplit.length}`;

// Exercício 2: Substituição de Palavra em Parágrafo
// Escreva um programa que substitua uma palavra específica em um parágrafo do DOM por outra palavra inserida pelo usuário.

// Crie um parágrafo (<p>) com um texto qualquer.
// Crie dois campos de texto (<input>): um para a palavra que será substituída e outro para a palavra de substituição.
// Crie um botão que, ao ser clicado, realiza a substituição da palavra e exibe o novo texto no parágrafo.
// Dicas:

// Use .replace() para fazer a substituição de uma palavra específica.
// A palavra substituída pode ser sensível à maiúsculas/minúsculas, se desejado.

const paragraph2 = document.getElementById('paragraph2');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.querySelector('button');

function substituicaoDeTexto() {
  const valorInput = input1.value;
  const inputSubstituicao = input2.value;
  const para2 = paragraph2.innerText;
  const novoTexto = para2.replace(valorInput, inputSubstituicao)
  paragraph2.innerText = novoTexto;
}

btn.addEventListener('click', substituicaoDeTexto);

// Exercício 4: Destacando Palavras-Chave
// Crie uma aplicação que destaque (em negrito) todas as ocorrências de uma palavra específica em um parágrafo do DOM.

// Crie um parágrafo com um texto longo.
// Crie um campo de texto e um botão.
// Ao clicar no botão, capture o valor do input e destaque (com <strong>) todas as ocorrências dessa palavra no parágrafo.
// Dicas:

// Use o método .replace() em conjunto com expressões regulares (RegExp) para encontrar todas as ocorrências da palavra.

const texto = document.getElementById('textoLongo');
const inputValue = document.getElementById('inputValue');
const btn2 = document.querySelector('.div2 button');

function verificarPalavra() {
  const value = inputValue.value;
  const palavra = texto.innerHTML;
  const regex = new RegExp(`${value}`, 'gi');
  const newtext = palavra.replace(regex, '<strong>$&</strong>');
  texto.innerHTML = newtext;
}

btn2.addEventListener('click', verificarPalavra);

// Exercício 5: Mostrando as Iniciais
// Desenvolva uma função que receba um texto de uma entrada de usuário e exiba apenas as iniciais de cada palavra em um parágrafo.

// Crie um campo de texto e um botão.
// Ao clicar no botão, capture o texto do input.
// A função deve exibir as iniciais de cada palavra do texto em um novo parágrafo.
// Dicas:

// Use .split(' ') para separar as palavras da string.
// Itere sobre o array resultante e capture a primeira letra de cada palavra usando .charAt(0).

const newInput = document.getElementById('inputDiv3');
const btn3 = document.querySelector('.div3 button');
const paragraphSplit2 = document.getElementById('paragraph3');

function arraySplit() {
  const valor = newInput.value;
  const split = valor.split(' ');
  const iteracao = split.map(palavra => palavra.charAt(0).toUpperCase()).join(' ');
  paragraphSplit2.innerText = iteracao;
  
}

btn3.addEventListener('click', arraySplit);