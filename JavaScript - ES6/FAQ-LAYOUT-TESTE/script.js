const accordionList = document.querySelectorAll('.js-accordion dt')

if(accordionList.length) {
  accordionList[0].classList.add('ativo')
  accordionList[0].nextElementSibling.classList.add('ativo')
}

function accordionAtivo() {
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item) => {
  item.addEventListener('click', accordionAtivo)
})