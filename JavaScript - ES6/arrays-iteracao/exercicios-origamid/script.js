// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso
const cursos = document.querySelectorAll('.curso');
const arrayCursos = Array.from(cursos);
const objetosCurso = arrayCursos.map(curso => {
  const titulo = curso.querySelector('h1').innerText;
  const descricao = curso.querySelector('p').innerText;
  const aulas = curso.querySelector('.horas').innerText;
  const horas = curso.querySelector('.aulas').innerText;
  return {
    titulo,
    descricao,
    aulas,
    horas
  }
})
console.log(objetosCurso)
// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const buscaMaiorQe100 = numeros.filter(valor => valor > 100);
console.log(buscaMaiorQe100)

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const verificarInstrumento = instrumentos.some(instru => {
  return instru === 'Baixo';
});
console.log(verificarInstrumento)

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

const valorTotal =  compras.reduce((acumulador, item) => {
  const precoLimpo = +item.preco.replace('R$', '').replace(',', '.');
  return acumulador + precoLimpo;
}, 0)
console.log(valorTotal)