let input = document.getElementById('input-texto');

function press(event) {
  if (event.key === 'a' || event.key === 'A') {
    event.preventDefault();
  }
}

input.addEventListener('keydown', press);