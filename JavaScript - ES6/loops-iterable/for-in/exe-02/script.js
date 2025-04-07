const para = document.getElementById('meuParagrafo');

const estilos = {
  color: 'red',
  backgroundColor: 'yellow',
  fontSize: '18px'
};

for (propriedade in estilos) {
    para.style[propriedade] = estilos[propriedade]
}