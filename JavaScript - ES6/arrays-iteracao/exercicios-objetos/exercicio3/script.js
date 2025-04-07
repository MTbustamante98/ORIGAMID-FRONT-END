// Exercício 3: Calcular a Média de Notas de Alunos
// Objetivo: Usar o método reduce() para calcular a média das notas dos alunos de um array de objetos e exibir o resultado no DOM.

// Instruções:

// Crie um array chamado alunos, onde cada objeto representa um aluno com as propriedades nome e nota.
// Usando o método reduce(), calcule a média das notas dos alunos.
// Exiba a média no DOM dentro de um parágrafo (<p>).
const message = document.getElementById('message');
const alunos = [
  {
    nome: 'Matheus',
    nota: 7.5,
  },

  {
    nome: 'Lucas',
    nota: 7,
  },

  {
    nome: 'Juliana',
    nota: 8,
  },

  {
    nome: 'Gabriel',
    nota: 6,
  },

  {
    nome: 'Ana',
    nota: 5.5,
  },
];

const calcularMedia = alunos.reduce((acumulador, atual) => acumulador + atual.nota, 0);

const media = calcularMedia / alunos.length;

message.innerText = `Média das notas: ${media.toFixed(2)}`

