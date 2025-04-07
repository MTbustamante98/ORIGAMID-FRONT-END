const imgs = document.querySelectorAll('img');
const para = document.getElementById('descricao')

imgs.forEach(img => {
  img.addEventListener('mouseover', function() {
    para.innerText = this.dataset.info;
  });
  img.addEventListener('mouseout', function () {
    para.textContent = '';
  })
})