const btnAbrir = document.getElementById('modal');
const fecharModal = document.getElementById('closeModal');
const containerModal = document.querySelector('.modal-content')

console.log(btnAbrir)

if (btnAbrir && fecharModal) {
  function toggleModal() {
    containerModal.classList.toggle('ativo')
  }
}

btnAbrir.addEventListener('click', toggleModal);
fecharModal.addEventListener('click', toggleModal);