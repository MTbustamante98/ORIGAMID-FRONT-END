const p = document.getElementById('text');

function press(event) {
  p.textContent += event.key;
}

p.addEventListener('keydown', press);