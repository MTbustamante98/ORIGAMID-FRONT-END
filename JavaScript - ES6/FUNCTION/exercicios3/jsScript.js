// Exercício 2: Método call()
// Crie uma função chamada apresentacao que recebe dois parâmetros: nome e idade. Depois, use o método call() para chamar essa função passando um objeto com as propriedades nome e idade.

const pessoa = {
  nome: 'Matheus',
  idade: 25
}

function apresentacao(nome, idade) {
  console.log(`Olá. meu nome é ${nome} e eu tenho ${idade} anos.`)
}

apresentacao.call(pessoa, pessoa.nome, pessoa.idade);

