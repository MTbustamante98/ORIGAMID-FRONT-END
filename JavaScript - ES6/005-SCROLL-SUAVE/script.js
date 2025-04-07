function initAccordion() {
const accordionList = document.querySelectorAll('.js-accord dt');

if(accordionList.length) {
  accordionList[0].classList.add('ativo');
  accordionList[0].nextElementSibling.classList.add('ativo');
}

function accordionEvent(event) {
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo');
  //console.log(event.currentTarget)
}

accordionList.forEach((item) => {
  item.addEventListener('click', accordionEvent);
})
}
initAccordion();

function initScroll() {
const scrollSuave = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)
  console.log(section)
  section.scrollIntoView ( {
    behavior: "smooth",
    block: "center",
  })
}

scrollSuave.forEach((link) => {
  link.addEventListener('click', scrollToSection)
})
}
initScroll();

function initTab() {
const tabMenu = document.querySelectorAll('.js-tabmenu .img-escudo')
const tabContent = document.querySelectorAll('.js-tabcontent p')

if(tabMenu.length && tabContent.length) {
  tabContent[0].classList.add('ativo');
}

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index)
  })
})
}
initTab()

const menuTAB = document.querySelectorAll('.js-tabLista li');
const contentTAB = document.querySelectorAll('.js-tabSection section');

if(menuTAB.lentgth && contentTAB.length) {
  contentTAB.classList.add('ativo')
}

function tabInit(index) {
  contentTAB.forEach((section) => {
    section.classList.remove('ativo');
  });
  contentTAB[index].classList.add('ativo');
}

menuTAB.forEach((item, index) => {
  item.addEventListener('click', () => {
    tabInit(index);
  })
})