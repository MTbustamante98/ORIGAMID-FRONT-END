const btnAbrir = document.getElementById('openModalFormBtn');
const sectionModal = document.getElementById('modalForm');
const fecharModal = document.getElementById('closeFormModal');
const formulario = document.getElementById('contactForm');

if(btnAbrir && fecharModal) {
  function toggleModal() {
    sectionModal.classList.toggle('ativo');
  }
  function clickFecharModal(event) {
    if(event.target === sectionModal)
      toggleModal(event)
  }
  function envioForm(event) {
    event.preventDefault();
    alert("Formulário Enviado com sucesso!")
    sectionModal.style.display = 'none';
  }
}

btnAbrir.addEventListener('click', toggleModal);
fecharModal.addEventListener('click', toggleModal);
window.addEventListener('click', clickFecharModal)
formulario.addEventListener('submit', envioForm);