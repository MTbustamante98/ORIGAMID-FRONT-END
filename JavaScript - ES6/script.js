const scrollSuave = document.querySelectorAll('.js-menu a[href^="#"]')

function scrollClick(event) {
  event.preventDefault()
  const href = event.currentTarget.getAttribute("href");
  const section = document.querySelector(href)
  section.scrollIntoView ({
    behavior: "smooth",
    block: "start",
  })
}

scrollSuave.forEach((link) => {
  link.addEventListener('click', scrollClick);
})