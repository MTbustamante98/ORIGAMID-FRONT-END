const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);

const objetoArray = arrayCursos.map(curso => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const horas = curso.querySelector('.horas').innerText;
  const aulas = curso.querySelector('.aulas').innerText;

  return {
    titulo,
    descricao,
    horas,
    aulas
  }
});

console.log(objetoArray);

// Retorne uma lista com os
// números maiores que 100

const numeros = [3, 44, 333, 23, 122, 322, 33];
const numeroMaior100 = numeros.filter(numero => numero > 100);

console.log(numeroMaior100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true

const instrumentos = ['Guitarra', 'Baixo', 'Bateria'];
verificarInstrumento = instrumentos.some(instrumento => {
  return instrumento === 'Baixo';
});

console.log(verificarInstrumento);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]
console.log(compras)