const titulos = document.getElementsByClassName('titulo');
titulosArray = Array.from(titulos)

function eventoMouse(event) {
  console.log(event)
  event.innerHTML = 'Novo Título';
}

titulosArray.forEach(item => {
  item.addEventListener('click', eventoMouse)
})