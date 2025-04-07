const links = document.querySelectorAll('.link-list a');

links.forEach(link => {
  // link.setAttribute('href', 'https://www.example.com')
  link.href = 'https://www.example.com'
})

const listaItens = document.querySelectorAll('.item-list li');

const paragrafo = document.querySelector('#total-items');
let total = listaItens.length
paragrafo.textContent = `Total de items: ${total}`

function createElements() {
  const novosItems = ['Novo item 1', 'Novo item 2', 'Novo item 3'];
  const lista = document.querySelector('#new-items');

  novosItems.forEach(item => {
    const novosItems = document.createElement('li')
    novosItems.textContent = item;
    lista.appendChild(novosItems);
  })
}

createElements();


