const lista = ['JavaScript', 'PHP', 'CSS'];

function logarItems(item, index) {
  console.log(item, 'no index:', index)
}

lista.forEach(logarItems)

// Pode-se escrever a função no argumento:
lista.forEach(function (item, index) {
  console.log(item, 'no index:', index);
});
