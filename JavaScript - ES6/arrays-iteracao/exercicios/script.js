const listaFrutas = ['Banana', 'Laranja', 'Maçã', 'Uva', 'Manga', 'Melancia', 'Mamão'];
const listaOrdenada = document.querySelector('ol');

listaFrutas.forEach(item => {
  const listaLI = document.createElement('li');
  listaOrdenada.appendChild(listaLI);
  listaLI.innerText = item;
});