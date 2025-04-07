document.addEventListener("DOMContentLoaded", (event) => {
  function dropInit() {
    const drag = document.getElementById("dragText");
    const drop = document.getElementById("dropZone");

    function dragElement(event) {
      event.dataTransfer.setData("text", event.target.id);
    }
    function dropZone(event) {
      event.preventDefault();
    }
    function dropZone2(event) {
      event.preventDefault();
      let data = event.dataTransfer.getData("text");
      let draggedElement = document.getElementById(data);
      drop.textContent = draggedElement.textContent;
    }

    drag.addEventListener("dragstart", dragElement);
    drop.addEventListener("dragover", dropZone);
    drop.addEventListener("drop", dropZone2);
  }
  dropInit();

  function ImageDrag() {
    const drag = document.getElementById("dragImage");
    const drop = document.getElementById("dropImage");

    function arrastar(event) {
      event.dataTransfer.setData("text", drag.id);
    }
    function over(event) {
      event.preventDefault();
    }
    function dropZone(event) {
      event.preventDefault();
      let data = event.dataTransfer.getData("text");
      let draggedElement = document.getElementById(data);
      if (draggedElement) {
        drop.appendChild(draggedElement);
      } else {
        console.error("Elemento arrastado não encontrado", data);
      }
    }

    drag.addEventListener("dragstart", arrastar);
    drop.addEventListener("dragover", over);
    drop.addEventListener("drop", dropZone);
  }
  ImageDrag();

  function dragList() {
    let listItems = document.querySelectorAll("#tableList li");

    function dragLista(event) {
      event.dataTransfer.setData("text", event.target.id);
    }

    function itemDragOver(event) {
      event.preventDefault();
    }

    function itemDragDrop(event) {
      event.preventDefault();
      let draggedId = event.dataTransfer.getData("text");
      let draggedElement = document.getElementById(draggedId);
      let dropTarget = event.target;

      if (dropTarget.nodeName === "LI") {
        let parent = dropTarget.parentNode;
        parent.insertBefore(draggedElement, dropTarget.nextSibling);
      }
    }

    listItems.forEach((item) => {
      item.addEventListener("dragstart", dragLista);
      item.addEventListener("dragover", itemDragOver);
      item.addEventListener("drop", itemDragDrop);
    });
  }
  dragList();

  let dragItem = document.getElementById('dragItem');
  let trash = document.getElementById('trash');

  function itemDrag(event) {
    event.dataTransfer.setData('text', event.target.id);
  }
  function itemOver(event) {
    event.preventDefault();
  }
  function itemDrop(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData('text');
    let draggedElement = document.getElementById(data);
    draggedElement.remove();
  }

  dragItem.addEventListener('dragstart', itemDrag);
  dragItem.addEventListener('dragover', itemOver);
  trash.addEventListener('drop', itemDrop);
});
