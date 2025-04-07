// Exercício 5: Função como valor de retorno
// Crie uma função chamada criarMultiplicador que recebe um número como parâmetro e retorna uma nova função que multiplica qualquer número pelo número fornecido. Em seguida, crie um multiplicador de 5 e use-o para multiplicar 10.

function criarMultiplicador(multiplicador) {
  return function(num) {
    return num * multiplicador;
  }
}

const multiplicarPor5 = criarMultiplicador(5);
console.log(multiplicarPor5(10))