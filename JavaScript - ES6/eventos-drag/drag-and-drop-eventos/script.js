document.addEventListener('DOMContentLoaded', (event) => {
function draggableInit() {
const draggable = document.getElementById('draggable');
const dragArea = document.getElementById('drag-area');

function over(event) {
  event.preventDefault();
}

function dropArea(event) {
  event.preventDefault();
  const offsetX = event.clientX - dragArea.offsetLeft - (draggable.offsetWidth / 2);
  const offsetY = event.clientY - dragArea.offsetLeft - (draggable.offsetHeight / 2);
  draggable.style.position = 'absolute';
  draggable.style.left = `${offsetX}px`
  draggable.style.top = `${offsetY}px`
}
dragArea.addEventListener('drop', dropArea);
dragArea.addEventListener('dragover', over);
}
draggableInit();

const dropArea = document.getElementById('drop-area');
const galeria = document.querySelectorAll('#container-imagens img');

function drag(event) {
  if (!event.target.id) {
    event.target.id = 'img-' + Math.random().toString(36).substring(2, 9);
  }
   event.dataTransfer.setData('text/plain', event.target.id);
}

function over(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  const imgId = event.dataTransfer.getData('text/plain');
  const img = document.getElementById(imgId);
  if (img) {
    dropArea.appendChild(img)
    img.style.width = '300px';
  }
}

dropArea.addEventListener('drop', drop);
dropArea.addEventListener('dragover', over);

galeria.forEach(img => {
  img.addEventListener('dragstart', drag);
});

const lista = document.getElementById('lista');
let draggedItem = null;

function dragList(event) {
  draggedItem = event.target;
  event.target.style.display = '0.5';
}

function endList(event) {
  event.target.style.opacity = '';
}

function overList(event) {
  event.preventDefault();
  const afterElement = Array.from(lista.children).find(child => child !== draggedItem && event.clientY < child.offsetTop + child.offsetHeight / 2);

  if (afterElement == null) {
    lista.appendChild(draggedItem);
  } else {
    lista.insertBefore(draggedItem, afterElement);
  }
}

lista.addEventListener('dragover', overList);

lista.addEventListener('dragend', endList);

lista.addEventListener('dragstart', dragList);
});