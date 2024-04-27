// Interagir com um elemento

const lista = ['JavaScript', 'PHP', 'CSS'];
const body = document.querySelector('body')

for(let index = 0; index <lista.length; index++) {
  const item = lista[index]
  body.innerHTML += '<li>' + lista[index] + '</li>';
}

