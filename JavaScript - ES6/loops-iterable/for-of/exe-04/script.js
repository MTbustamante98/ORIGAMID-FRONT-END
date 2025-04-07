const paragraph = document.querySelectorAll("p");

for (p of paragraph) {
  if (p.classList.contains("importante")) {
    p.textContent = "Texto alterado!";
  }
}
