function initAccordion() {
const accordionList = document.querySelectorAll(".js-accordion dt")

if(accordionList.length) {
  accordionList[0].classList.add('ativo')
  accordionList[0].nextElementSibling.classList.add('ativo')
}

function activeAccordion() {
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item) => {
  item.addEventListener('click', activeAccordion);
});
}
initAccordion();

function $ScrollInit() {
const scrollSuave = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollTosection(event) {
  event.preventDefault()
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href)
  section.scrollIntoView( {
    behavior: "smooth",
    block: "start",
  })
}

scrollSuave.forEach((link) => {
  link.addEventListener('click', scrollTosection);
})
}

$ScrollInit()