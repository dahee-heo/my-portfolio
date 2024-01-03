const works = document.querySelector('.main__section.works');
const worksTop =  works.getBoundingClientRect().top;
const worksListUl = document.querySelector('.works-list__wrap');
const workSection = document.querySelector(".main__section.works")
const introMain = document.querySelector(".intro-main")
const careerMain = document.querySelector(".main__section.career")

const fullHeight = document.body.scrollHeight;
window.addEventListener("scroll", () => {
  if (worksTop < (fullHeight / 50)) {
    // worksListUl.style.transform = `translate3d(${worksTop},0, 0)`
  }

  // console.log(worksListUl.getBoundingClientRect())
  // console.log(window.innerHeight)


  // if (worksListUl.getBoundingClientRect().top < (window.innerHeight / 2)) {
  //   const x = worksListUl.getBoundingClientRect().top -  (worksListUl.getBoundingClientRect().width/100)
  //   // console.log('x: ', x);
  //   worksListUl.style.transform = `translate3d(${x}vw, 0, 0)`

  // }
  // if (workSection.getBoundingClientRect().top <= 0) {
  //   introMain.style.backgroundColor = 'rgb(0, 0, 0)'
  // } else if (careerMain.getBoundingClientRect().top <= 0) {
  //   introMain.style.backgroundColor = 'rgb(21, 142, 98)'
  // } else {
  //   introMain.style.backgroundColor = 'rgb(66, 36, 210)'
  // }

})

const introSection = document.querySelector(".main__section.intro")
// introSection.style.backgroundColor = 'rgb(66, 36, 210)'

// const observe = new IntersectionObserver((ele) => {
//   console.log('ele: ', ele);
//   ele.forEach((section) => {
//     if (section.isIntersecting) {
//       section.target.style.opacity = 1;
//     }
//   })
// })
// // observe.observe(introSection)

// let section = document.querySelectorAll('section')
// observe.observe(section[0])
// observe.observe(section[1])
// observe.observe(section[2])

