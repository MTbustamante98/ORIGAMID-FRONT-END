const message = document.getElementById('message');
const funcionarios = [
  {
    nome: 'Pedro',
    idade: 33,
  },

  {
    nome: 'Matheus',
    idade: 45,
  },

  {
    nome: 'Luis',
    idade: 23,
  },

  {
    nome: 'Thomas',
    idade: 32,
  }
];

const funcionarioMaior30 = funcionarios.filter(funcionario => funcionario.idade > 30);

const listaNomes = funcionarioMaior30.map(funcionario => funcionario.nome);

message.innerText = `Funcionários com idade maior que 30: ${listaNomes.join(", ")}`;
