const tabMenu = document.querySelectorAll('.js-tabmenu li');
const contentTab = document.querySelectorAll('.js-tabcontent section');

if(contentTab.length && tabMenu.length) {
  contentTab[0].classList.add('ativo')
}

function activeTab(index) {
  contentTab.forEach(content => {
    content.classList.remove('ativo');
  });
  contentTab[index].classList.add('ativo')
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  })
})