const inputbgColor = document.getElementById("backgroundColor");
const btn = document.querySelector(".btn");

function loadColor() {
  const savedColor = localStorage.getItem("buttonColor");
  if(savedColor) {
    btn.style.backgroundColor = savedColor;
    inputbgColor.value = savedColor;
  }
}

function updateColor() {
  const color = inputbgColor.value;
  btn.style.backgroundColor = color;
  localStorage.setItem("buttonColor", color)
}

inputbgColor.addEventListener("input", updateColor);

