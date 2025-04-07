const coord = document.createElement('div');
document.body.appendChild(coord);
coord.style.position = 'fixed';
coord.style.top = '10px';
coord.style.left = '10px';
coord.style.backgroundColor = '#f0f0f0';
coord.style.padding = '5px';

function coordenadas(event) {
  coord.textContent = `X: ${event.clientY}, Y: ${event.clientY}`;
}

document.addEventListener('mousemove', coordenadas);