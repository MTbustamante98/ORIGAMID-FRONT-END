const dropdownMenus = document.querySelectorAll('[data-dropdown]');

function handleClick(event) {
  event.preventDefault();
  const isActive = this.classList.contains('active');

  closeAllDropDowns();
  
  if(!isActive) {
    this.classList.add('active');
  }
}

function closeAllDropDowns() {
  dropdownMenus.forEach(menu => menu.classList.remove('active'));
}

function windowEventCloset(event) {
  if (!event.target.closest('[data-dropdown]')) {
    closeAllDropDowns();
  }
}

document.addEventListener('click', windowEventCloset);

dropdownMenus.forEach(menu => {
  ['touchstart', 'click'].forEach(userevent => {
    menu.addEventListener(userevent, handleClick);
  });
});

const menuButton = document.querySelector('[data-menu="button"]');
const menuList = document.querySelector('.menu');
const html = document.documentElement;

menuButton.addEventListener('click', () => {
  if(menuButton) { 
    menuList.classList.add('active');
    menuButton.classList.add('active');
  }
});

html.addEventListener('click', (event) => {
  if(menuList.classList.contains('active') && !menuList.contains(event.target) && event.target !== menuButton) {
    menuList.classList.remove('active');
    menuButton.classList.remove('active');
  }
})

