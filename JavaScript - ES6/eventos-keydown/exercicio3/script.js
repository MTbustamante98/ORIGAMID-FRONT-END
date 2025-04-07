let div = document.getElementById('div');
let position = {top: 0, left: 0};

function posicao(event) {
  switch (event.key) {
    case 'ArrowUp':
      position.top -= 10; 
      break;
    case 'ArrowDown':
      position.top += 10;      
      break;
    case 'ArrowLeft':
      position.left -= 10;
      break;
    case 'ArrowRight':
      position.left += 10;
      break;
  }
}

div.style.top = position.top + 'px';
div.style.left = position.left + 'px';

document.addEventListener('keydown', posicao);