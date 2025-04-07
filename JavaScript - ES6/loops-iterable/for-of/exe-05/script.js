const divs = document.querySelectorAll('div');

for (box of divs) {
  if (box.classList.contains('ocultar')) {
    box.style.display = 'none';
  }
}