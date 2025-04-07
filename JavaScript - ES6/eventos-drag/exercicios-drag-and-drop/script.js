const dragImage1 = document.getElementById('image1');
const dragImage2 = document.getElementById('image2');

function drag1(event) {
  event.dataTransfer.setData('imageId', dragImage1.id);
}
function over1(event) {
  event.preventDefault();
}

function drop1(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData('text');
  let draggedElement = document.getElementById(data);
}

function drag2(event) {
  event.dataTransfer.setData('imageId', dragImage2.id);
}
function over2(event) {
  event.preventDefault();
}

function drop2(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData('text');
  let draggedElement = document.getElementById(data);
}

dragImage1.addEventListener('dragstart', drag1);
dragImage1.addEventListener('dragover', over1);
dragImage2.addEventListener('dragstart', drag2);
dragImage2.addEventListener('dragover', over2);
dragImage1.addEventListener('drop', drop1);
dragImage2.addEventListener('drop', drop2);
