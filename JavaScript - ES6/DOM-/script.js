document.addEventListener('DOMContentLoaded', (event) => {
const para = document.querySelectorAll('p');
para.forEach((item) => {
  item.textContent = 'Hello World!';
})

function initArticle() {
const article = document.getElementById('article')
      article.style.width = '200px'
      article.style.height = '200px'
      article.style.border = '1px solid black'
    }
initArticle()

});