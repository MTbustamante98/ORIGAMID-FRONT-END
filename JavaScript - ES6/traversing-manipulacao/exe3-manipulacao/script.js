document.addEventListener('DOMContentLoaded', (event) => {
const lista = document.getElementById('lista');

const novoItem = document.createElement('li');
novoItem.innerText = 'Tarefa 3';
lista.appendChild(novoItem);

const novoItem2 = document.createElement('li');
novoItem2.innerText = 'Tarefa 0';
 lista.appendChild(novoItem2);
 lista.insertBefore(novoItem2, lista.children[0])
});
