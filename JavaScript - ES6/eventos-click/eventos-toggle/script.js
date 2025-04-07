const btn = document.querySelector('.botao');
const para = document.querySelector('p');
function toggleEvent() {
  if(para.style.display === 'none') {
    para.style.display = 'block';
  } else {
    para.style.display = 'none';
  }
}

btn.addEventListener('click', toggleEvent);