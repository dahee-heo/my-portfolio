const viewportHeight = window.innerHeight;

const main = document.querySelector('main');

const introSection = document.querySelector('.intro-section');
const aboutSection = document.querySelector('.about-section');
const skillSection = document.querySelector('.skill-section');
const worksSection = document.querySelector('.works-section');
const careerSection = document.querySelector('.career-section');

const profileLeft = document.querySelectorAll('.profile-left');
const worksItems = document.querySelectorAll('.works-grid a')
const careerList = document.querySelector('.career-list')

const aboutHeight = aboutSection.getBoundingClientRect().height;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  // console.log(worksSection.getBoundingClientRect().top)
  // console.log(aboutSection.getBoundingClientRect())
  const innerEnd = scrollTop + window.innerHeight + 50 >= document.body.scrollHeight

  if (aboutSection.getBoundingClientRect().top < 100 ) {
    main.style.backgroundColor = '#7766e8'
    //글씨 fade
  } else {
    main.style.backgroundColor = '#eff0f6'
  }

  if (worksSection.getBoundingClientRect().top < 100 ) {
    main.style.backgroundColor = '#eff0f6'
    worksItems.forEach((item) => {
      item.style.opacity = '1'
      item.style.animation = 'scaleIn 1s ease-out'
    })
  } else {
    worksItems.forEach((item) => {
      item.style.opacity = '0'
    })
  }

  if (careerSection.getBoundingClientRect().top < 100 ) {
    main.style.backgroundColor = '#ddd'
    careerList.addEventListener('wheel', () => {
    })

  }

  // console.log('scrollTop: ', scrollTop, aboutSection.getBoundingClientRect().top, aboutSection.getBoundingClientRect().bottom);
  if (scrollTop > aboutSection.getBoundingClientRect().top && scrollTop < aboutSection.getBoundingClientRect().bottom) {
    profileLeft[0].style.transform = `translate3d(0px,${scrollTop -  innerHeight}px,0px)`
  } else {
    profileLeft[0].style.transform = `translate3d(0px,0px,0px)`
  }

})