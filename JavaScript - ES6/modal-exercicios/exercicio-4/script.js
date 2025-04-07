const modal = document.getElementById('modalSmooth');
const btnAbrir = document.getElementById('openModalSmooth');
const btnFechar = document.getElementById('closeModalSmooth');
const action1 = document.getElementById('action1');
const action2 = document.getElementById('action2');


btnAbrir.addEventListener('click', () => {
  modal.showModal();
});

btnFechar.addEventListener('click', () => {
  modal.close()
});

action1.addEventListener('click', () => {
  const para = document.createElement('p');
  para.innerText = 'Você clicou na ação 1!'
  modal.appendChild(para);
});

action2.addEventListener('click', () => {
  const para = document.createElement('p');
  para.innerText = 'Você clicou na ação 2!'
  modal.appendChild(para);
});