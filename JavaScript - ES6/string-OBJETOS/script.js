const comida = 'Pizza';
const liquido = new String('Água');
const ano = new String(2018);

//String.LENGTH
//Propriedade com o total de caracteres da string.
const time = 'Internacional';
const frase = 'Fomos campeões do mundo em 2006!';
console.log(time.length);

//String.CHARAT
//Retorna o caracter de acordo com o index de (n).
const linguagem = 'JavaScript';
console.log(linguagem.charAt(1))

//str.concat(str2, str3, ...)
//Concatena as strings e retorna o resultado.
const frase2 = 'A melhor linguagem é ';
const linguagem2 = 'JavaScript';
const fraseCompleta = frase2.concat(linguagem2, '!!')
console.log(fraseCompleta);

//str.includes(search, position)
//Procura pela string exata dentro de outra string. A procura é case sensitive.
//STR.INCLUDES PUXAMOS A VÁRIAVEL PARA DENTRO DOS PARÊNTESES
const fruta = 'Banana';
const frutas = 'Banana, Laranja'
const listFrutas = 'Melancia, Banana, Laranja';

console.log(listFrutas.includes(fruta))
console.log(fruta.includes(listFrutas))
console.log(listFrutas.includes(frutas))

//str.endsWith(search) e str.startsWith(search)
//Procura pela string exata dentro de outra string. A procura é case sensitive.
//STR.ENDSWITH E STR.STARTSWITH PUXAMOS A STRING PARA DENTRO DOS PARÊNTESES
const Banana = 'Banana';
console.log(Banana.startsWith('nana'))
console.log(Banana.startsWith('Ba'))
console.log(Banana.startsWith('na'))

const oracao = 'Estamos no ano de 2024';
console.log(oracao.startsWith('Est'))
console.log(oracao.endsWith(2024))

//str.slice(start, end)
//Corta a string de acordo com os valores de start e end.
const transacao1 = 'Depósito de clientes';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';
console.log(transacao1.slice(0, 3))
console.log(transacao2.slice(0, 3))
console.log(transacao3.slice(0, 3))

//str.substring(start, end)
//Corta a string de acordo com os valores de start e end. Não funciona com valores negativos como o slice.
const script = 'JavaScript';
console.log(linguagem.substring(3,5))
console.log(linguagem.substring(0,4))
console.log(linguagem.substring(4))

//str.indexOf(search) e str.lastIndexOf(search)
//Retorna o index da string, assim que achar o primeiro resultado ele já retorna. No caso do lastIndexOf ele retorna o último resultado.
const instrumento = 'Guitarra';
console.log(instrumento.indexOf('r'));
console.log(instrumento.lastIndexOf('r'));
console.log(instrumento.lastIndexOf('a'));

//str.padStart(n, str) e str.padEnd(n, str)
//Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caso não seja declarado o segundo argumento.
const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '*'));
})

console.log(listaPrecos[0].padStart(10, '.'))
console.log(listaPrecos[0].padEnd(10, '.'))

//str.repeat(n)
//Repete a string (n) vezes.
const frases = 'Ta';
frases.repeat(5);

//str.replace(regexp|substr, newstr|function)
//Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, ', ');
console.log(listaItens);

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.');
console.log(preco)

//str.split(padrao)
//Divide a string de acordo com o padrão passado e retorna uma array.

const listaItens2 = 'Camisas Bonés Calças Bermudas Vestidos Saias';
const arrayItens = listaItens2.split(' ');
console.log(arrayItens);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');
console.log(htmlText)

//str.toLowerCase() e str.toUpperCase()
//Retorna a string em letras maiúsculas ou minúsculas. Bom para verificarmos input de usuários.

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

(sexo1.toLowerCase() === 'feminino');
(sexo2.toLowerCase() === 'feminino');
(sexo3.toLowerCase() === 'feminino');

//str.trim(), str.trimStart(), str.trimEnd()
//Remove espaço em branco do início ou final de uma string.

const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'


// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach(item => {
  const numeroLimpo = +item.valor.replace('R$', '');
  if(item.descricao.slice(0,4) === 'Taxa') {
    taxaTotal = taxaTotal + numeroLimpo;
  } else {
    recebimentoTotal += numeroLimpo;
  }
})
console.log(taxaTotal);
console.log(recebimentoTotal);


// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
const array = transportes.split(';');
console.log(array)

// Substitua todos os span's por a's
let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

html = html.split('span').join('a');
console.log(html)
// Retorne o último caracter da frase
const frase3 = 'Melhor do ano!';
console.log(frase3[frase3.length - 1])

// // Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let taxasTotal = 0;
transacoes2.forEach(item => {
  item = item.toLowerCase().trim().slice(0,4);
  if(item === 'taxa') 
    taxaTotal++;
})
console.log(taxaTotal)


