let input = document.getElementById('input-texto');
let count = document.getElementById('count');

function contador(event) {
  let counter = input.value.length;
  count.textContent = counter;
}

input.addEventListener('keydown', contador);