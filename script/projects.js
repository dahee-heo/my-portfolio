const image = document.querySelector('.project-img')
const topIn = document.querySelectorAll('.top-in')

window.addEventListener('scroll', () => {
  topIn.forEach((ele, idx) => {
    ele.style.opacity = '0';
    if (ele.getBoundingClientRect().top < window.innerHeight) {
      ele.style.animation = `topIn 1s ease-out`;
      ele.style.opacity = '1';
    }
  })
})