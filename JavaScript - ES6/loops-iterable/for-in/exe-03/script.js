const atributos = {
  alt: "Imagem padrão",
  title: "Clique para ampliar"
}

const imagens = document.querySelectorAll(".foto");

for (img of imagens) {
  for(atributo in atributos) {
    img.setAttribute(atributo, atributos[atributo])
  }
}