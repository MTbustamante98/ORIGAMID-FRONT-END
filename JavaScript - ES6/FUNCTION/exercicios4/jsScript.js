// Exercício 3: Método apply()
// Crie uma função chamada multiplica que recebe dois números e retorna o produto deles. Use o método apply() para chamar a função passando um array de números como argumento.

function multiplica(n1, n2, produto) {
  return n1 * n2;
}

const numeros = [5, 3]
console.log(multiplica.apply(null, numeros));