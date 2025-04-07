const frutasVermelhas = ['morango', 'cereja', 'melancia'];
const frutasAmarelas = ['banana', 'abacaxi', 'manga'];

const todasFrutas = [...frutasVermelhas, ...frutasAmarelas]

console.log(todasFrutas);

const pessoa = {
  nome: 'João',
  idade: 25,
  cidade: 'São Paulo'
};

const novaPessoa = {
  ...pessoa,
  profissao: 'Engenheiro',
  cidade: 'São Paulo'
};
console.log(novaPessoa);

function soma(a, b, c) {
  return a + b + c;
}

const numeros = [7, 4, 9];

console.log(soma(...numeros))