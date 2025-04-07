//isNaN() é um método de Number, ou seja, não faz parte to protótipo. isInteger() verifica se é uma integral.
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(4 + 5));

//Número integral é um número que não é decimal. Podendo ser positivo ou negativo.
console.log(Number.isInteger(20))
console.log(Number.isInteger(20.6))

//parseFloat() serve para retornarmos um número a partir de uma string. A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

console.log(Number.parseFloat('90.50'));
console.log(Number.parseFloat('100 reais'));
console.log(Number.parseFloat('R$ 100'));

//parseInt() retorna somente números inteiros...
console.log(Number.parseInt('R$ 100'));
console.log(Number.parseInt('100.6'));

//N.toFixed(decimais) Arredonda o número com base no total de casas decimais do argumento.

const preco = 2.99;
console.log(preco.toFixed());

const carro = 1000.455;
console.log(carro.toFixed(2));

const preco2 = 1499.49;
console.log(preco2.toFixed());

//n.toString(radix) Transforma o número em uma string com base no Radix. Use o 10 para o sistema decimal.

const preco3 = 2.99;
console.log(preco3.toString(10))


//n.toLocaleString(lang, options) Formata o número de acordo com a língua e opções passadas.

const preco4 = 54.49;
console.log(preco4.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
console.log(preco4.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
console.log(preco4.toLocaleString('CH', {style: 'currency', currency: 'CHF'}));
console.log(preco4.toLocaleString('JP', {style: 'currency', currency: 'JPY'}));
console.log(preco4.toLocaleString('EUR', {style: 'currency', currency: 'EUR'}));
console.log(preco4.toLocaleString('GB', {style: 'currency', currency: 'GBP'}));

//MATH - É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns. Math.abs(), Math.ceil(), Math.floor() e Math.round()

//abs() retorna o valor absoluto, ou seja, transforma negativo em positivo.
console.log(Math.abs(-5.5));

//ceil() arredonda para cima, retornando sempre uma integral.
console.log(Math.ceil(7.999));

//floor() arredonda para baixo, retornando sempre uma integral.
console.log(Math.floor(4.5));

//round() arredonda para o integral mais próximo.
console.log(Math.round(4.3));
console.log(Math.round(4.900));

//Math.max(), Math.min() e Math.random();

//max() retorna o maior número de uma lista de argumentos.
console.log(Math.max(5, 3, 10, 42, 2));

//min() retorna o menor número de uma lista de argumentos.
console.log(Math.min(5, 3, 10, 42, 2));

//math.random() Um número aletório entre 0 e 1.

console.log(Math.floor(Math.random() * 100)); // entre 0 e 100;
console.log(Math.floor(Math.random() * 500)); // entre 0 e 100;

console.log(Math.floor(Math.random() * (72 - 32 + 1)) + 32);


// Retorne um número aleatório
// entre 1050 e 2000
const numeroAleatorio = Math.floor(Math.random() * (2000 - 1050 + 1) + 1050)
console.log(numeroAleatorio)
// Retorne o maior número da lista abaixo
const numeros = ('4, 5, 20, 8, 9');
const arrayNumeros = numeros.split(', ');
const NumeroMaximo = Math.max(...arrayNumeros);
console.log(NumeroMaximo);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total

const listaPrecos = ['R$ 59,99', ' R$ 100,222', 'R$ 230', 'r$  200'];


function limparEretornar(preco) {
  preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.');
  preco = +preco.toFixed();
  return preco;
}
let soma = 0;
listaPrecos.forEach(preco => {
  soma += limparEretornar(preco)
})
console.log(soma)
limparEretornar(listaPrecos[0])