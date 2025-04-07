// //function declaration
// function somar(a,b) {
//   return a + b;
// }

// somar(4,2); // 6

// //function expression
// const somar = function(a,b) {
//   return a + b;
// }

// somar(4,2); // 6

// //Arrow function
// const somar = (a, b) => a + b;
// somar(4,2); // 6

// const quadrado = a => a * a;
// quadrado(4); // 16

// Remova o erro
const priceNumber = n => +n.replace('R$', '').replace(',', '.');
console.log(priceNumber('R$ 99,99'));
// Crie uma IIFE e isole o escopo
// de qualquer código JS.
(function() {
  var nome = 'Matheus'
})();

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();
