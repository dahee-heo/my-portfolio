const image = document.querySelector('.project-img')

window.addEventListener('scroll', () => {
  if (window.scrollY <= 0) {
    image.style.width = '100%'
    image.style.height = '100vh'
  } else if (window.scrollY > 1 && window.scrollY < window.innerHeight) {
    console.log('window.scrollY: ', window.scrollY);
    image.style.height = `${100 - window.scrollY}vh`
  }
})