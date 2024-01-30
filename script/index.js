import {
  main,
  viewportHeight,
  introSection,
  aboutSection,
  aboutSectionWrap,
  aboutText,
  skillSection,
  worksSection,
  careerSection,
  careerSectionWrap,
  contactSection,
  profileLeft,
  worksItems,
  careerList,
  careerItems,
  skillItems,
  root,
  rootStyles,
  violetBg,
  violet,
  white,
  black,
  showPoint,
  aboutSectionTop,
  aboutSectionRect,
  careerSectionTop,
  careerSectionRect,
  skillSectionTop,
  contactSectionTop,
  careerSectionBottom,
  aboutSectionBottom,
  skillSectionBottom
} from "./constants.js";



const careerX = 0;
function sectionAboutEvent(scrollY) {
  aboutSectionWrap.style.transform = `translate3d(0, ${scrollY - window.innerHeight}px, 0)`
  
  const position = scrollY - aboutSectionTop;
  const onePoint = Math.ceil(aboutSectionRect.height / 5 * 1)
  const twoPoint = Math.ceil(aboutSectionRect.height / 5 * 2)
  const threePoint = Math.ceil(aboutSectionRect.height / 5 * 3)

  const textOpacity = (idx) => {
    aboutText[0].style.opacity = 0.5;
    aboutText[1].style.opacity = 0.5;
    aboutText[2].style.opacity = 0.5;

    if (idx) {
      const i = Number(idx)
      aboutText[i].style.opacity = 1;
    }
  }
  let y;
  if (position < onePoint) {
    textOpacity('0');
  } else if (position > onePoint && position < twoPoint) {
    textOpacity('1');
  } else if (position > twoPoint && position < threePoint) {
    textOpacity('2');
  } else if (position > threePoint) {
    y = threePoint
    for ( let i = 0; i < threePoint; i++) {
      y - i
    }
    aboutSectionWrap.style.transform = `translate3d(0, ${y}px, 0)`
  } else {
    textOpacity();
  }

}


function sectionCareerEvent(scrollY) {
    
  const position = scrollY - careerSectionTop;
  const threePoint = Math.ceil(careerSectionRect.height / 5 * 3)
  
  let y;
  let careerX = y
  // console.log('x: ', x);
  
  if (position < threePoint) {
    y = Math.ceil(scrollY - careerSectionTop);
  } else {
    y = threePoint
    for ( let i = 0; i < threePoint; i++) {
      y - i
    }
    careerSectionWrap.style.transform = `translate3d(0, ${y}px, 0)`
  } 
  // console.log('y: ', y);
  careerSectionWrap.style.transform = `translate3d(0, ${y}px, 0)`
  careerList.style.transform = `translate3d(-${y}px, 0, 0)`


}

const scaleIn = (elements) => {
  elements.forEach((item) => {
    item.style.opacity = '1'
    item.style.animation = 'scaleIn 1s ease-out'
  })
}

function mainColor() {
  const scrollTop = window.scrollY;
  skillItems.forEach((item) => {
    item.style.opacity = '0'
  })
  
  const veiwPoint = window.innerHeight / 5;

  if (scrollTop < aboutSectionTop - veiwPoint) {
    main.style.backgroundColor = black;
  } else if (scrollTop > aboutSectionTop - veiwPoint 
    && scrollTop < skillSectionTop - veiwPoint) {
    main.style.backgroundColor = violet;
  } else if (scrollTop > skillSectionTop - veiwPoint) {
    main.style.backgroundColor = white;
    // scaleIn(skillItems)
  } else if (scrollTop < contactSectionTop - veiwPoint) {
    main.style.backgroundColor = black;
  }
  
  // console.log('skillSectionTop + veiwPoint: ', skillSectionTop + veiwPoint);
  // if (scrollTop > skillSectionTop + veiwPoint) {
  //   main.style.backgroundColor = white;

  // }
}

const topIn = document.querySelectorAll('.top-in')
const onScroll = () => {
  const scrollTop = window.scrollY;
  
  topIn.forEach((ele, idx) => {
    ele.style.opacity = '0';
    if (ele.getBoundingClientRect().top < window.innerHeight) {
      ele.style.animation = `topIn 1s ease-out`;
      ele.style.opacity = '1';
    }
  })
  // mainColor()
  // let bodyScrollTop = document.body.scrollTop;
  if (scrollTop < aboutSectionTop) {
    main.style.backgroundColor = violetBg;
  } else if (scrollTop > aboutSectionTop && scrollTop < careerSectionTop) {
    main.style.backgroundColor = black;
  } 
  // else if (scrollTop > careerSectionTop) {
    
  //   main.style.backgroundColor = violet;
  // }
  // let elementScrollTop = document.documentElement.scrollTop;
  // let elementScrollHeight = document.documentElement.scrollHeight;
  // let elementClientHeight = document.documentElement.clientHeight;
  // let scrollpercent = (bodyScrollTop + elementScrollTop) / (elementScrollHeight - elementClientHeight);
  // const aboutHeight = aboutSectionRect.height;

  //about section
  // if (scrollTop < aboutSectionTop) {
  //   //글씨 fade
  // } else {
  // }

  // if (scrollTop > aboutSectionTop && scrollTop < aboutSectionBottom) {
  //   sectionAboutEvent(scrollTop)
  // }  
  
  // if (scrollTop > skillSectionTop && scrollTop < skillSectionBottom) {
  //   scaleIn(skillItems)
  // } else {
  //   // skillItems.forEach((item) => {
  //   //   item.style.opacity = '0'
  //   // })
  // }

  // if (worksSection.getBoundingClientRect().top < 100) {
  //   // main.style.backgroundColor = violetBg
  //   scaleIn(worksItems)
  // } else {
  //   worksItems.forEach((item) => {
  //     item.style.opacity = '0'
  //   })
  // }

  if (window.scrollY > careerSectionTop && window.scrollY < careerSectionBottom) {
    let x = window.scrollY - careerSectionTop
    console.log('x: ', x);
    
    careerList.style.transform = `translate3d(-${x}px, 0, 0)`
  }

  // if (scrollTop > careerSectionTop && scrollTop < careerSectionBottom) {
  //   sectionCareerEvent(scrollTop)
  // } else if (scrollTop < careerSectionTop) {
  //   careerList.style.transform = `translate3d(0, 0, 0)`
  // }
}

window.addEventListener('scroll', onScroll)









// worksItems.forEach(item => {
//   item.addEventListener('mousemove', (event) => {
//     const mouseY = event.clientY
//     const mouseX = event.clientX

//     const moreCursor = document.querySelector('.more-cursor')
//     moreCursor.style.display = 'block';
//     moreCursor.style.top = mouseY + 'px';
//     moreCursor.style.left = mouseX + 'px';

//   })
// })