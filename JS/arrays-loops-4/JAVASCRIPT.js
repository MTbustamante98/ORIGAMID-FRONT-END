const links = document.querySelectorAll('a');

function logHref(item) {
  const href = item.href;
  console.log(href)
}

links.forEach(logHref)

console.log(links[0])

const lista = ['JavaScript', 'HTML', 'CSS'];

// retorna o total
const total = lista.length;

// remove o último
const ultimo = lista.pop();

// remove o primeiros
const primeiro = lista.shift();

// adiciona ao final
lista.push('PHP');

console.log(lista);