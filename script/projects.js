const tabLi = document.querySelectorAll('.tab-item');
const projectLi = document.querySelector('.project-li__wrap');

tabLi[0].addEventListener('click', () => {
  projectLi.innerHTML = ''
})