function logcurso() {
  const nome = "JavaScript"
  console.log(nome)
}

logcurso()

function tocheck() {
  const valor = 1200
  console.log(valor)
}

tocheck()

function soma() {
  let valor1 = 5
  let valor2 = 10
  let valor3 = 20
  let s = (valor1 * valor2 + valor3) / 5
  console.log(s)
}

soma()

function logcurso(nome, nome2, horas) {
  console.log(nome, nome2, horas)
}

logcurso('JavaScript', 'PHP', '40')
logcurso('HTML', 'CSS', '500')

const livro = {
  nome: 'O Senhor dos Anéis',
  ano: 1954,
  autor: 'J. R. R. Tolkien',
};

console.log(livro);
console.log(livro.nome);

function logCurso(nome) {
  console.log(nome);
  return nome + ' Log';
}

const valor = logCurso('JavaScript');
console.log(valor);
