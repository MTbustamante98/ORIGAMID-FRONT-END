function tabListaInit() {
const menuTab = document.querySelectorAll('.js-tabLista li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(menuTab.length && tabContent.length) {
  tabContent[0].classList.add('ativo')
} 

function tabInit(index) {
  tabContent.forEach((content) => {
    content.classList.remove('ativo');
  })
  tabContent[index].classList.add('ativo');
}

menuTab.forEach((itemMenu, index) => [
  itemMenu.addEventListener('click', () => {
    tabInit(index);
  })
])
}
tabListaInit()

//--------------------------------------------------------------------------------------//

const listaImg = document.querySelectorAll('.js-listaTab li');
const sectionTab = document.querySelectorAll('.js-tabContent section');

if(listaImg.length && sectionTab.length) {
  sectionTab[0].classList.add('ativo')
}

function activeTab(index) {
  sectionTab.forEach((content) => {
    content.classList.remove('ativo');
  })
  sectionTab[index].classList.add('ativo')
}

listaImg.forEach((menuItem, index) => {
  menuItem.addEventListener('click', () => {
    activeTab(index)
  })
})

//--------------------------------------------------------------------------------------//
const listaMenu = document.querySelectorAll('.js-Tab li');
const sectionContent = document.querySelectorAll('.js-content section');

if(listaMenu.length && sectionContent.length) {
  sectionContent[0].classList.add('ativo')
}

function tabActive(index) {
  sectionContent.forEach((content) => {
    content.classList.remove('ativo');
  })
  sectionContent[index].classList.add('ativo')
}

listaMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    tabActive(index);
  })
})

const accordionList = document.querySelectorAll('.js-accordion dt')

if(accordionList.length) {
  accordionList[0].classList.add('ativo')
  accordionList[0].nextElementSibling.classList.add('ativo')
}

function accordionClick(event) {
  this.classList.toggle('ativo')
  this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item) => {
  item.addEventListener('click', accordionClick)
})

const scrollSuave = document.querySelectorAll('.js-menu a[href^="#"]');

function scrollEvent(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute("href")
  const section = document.querySelector(href)
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

scrollSuave.forEach((link) => {
  link.addEventListener('click', scrollEvent);
})


const MenuTabli = document.querySelectorAll('.js-slide li');
const contentSection = document.querySelectorAll('.js-sectionContent section');

if(MenuTabli.length && contentSection.length) {
  contentSection[0].classList.add('ativo')
}

function ativarTAB(index) {
  contentSection.forEach((content) => {
    content.classList.remove('ativo');
  })
  contentSection[index].classList.add('ativo');
}

MenuTabli.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    ativarTAB(index);
  })
})