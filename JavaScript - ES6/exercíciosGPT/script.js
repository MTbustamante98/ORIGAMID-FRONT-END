const paragrafo = document.querySelectorAll('p');

// paragrafo.forEach((item) => {
//   item.textContent = 'Texto alterado pelo JavaScript'
// })

for(const ph of paragrafo) {
  ph.textContent = 'Texto alterado pelo JavaScript'
}

document.querySelector('button').textContent = 'Clique aqui';

