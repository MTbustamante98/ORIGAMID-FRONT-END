const popup = document.createElement('div');
popup.textContent = 'Pressione Esc para fechar';
popup.style.top = '50%';
popup.style.left = '50%';
popup.style.transform = 'translate(-50%, -50%)';
popup.style.padding = '20px';
popup.style.backgroundColor = '#ccc';
document.body.appendChild(popup);

function Popup(event) {
  if (event.key === 'Escape') 
    popup.style.display = 'none'
}

document.addEventListener('keydown', Popup);
