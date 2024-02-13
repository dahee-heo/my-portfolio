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
  // contactSection,
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
  // contactSectionTop,
  careerSectionBottom,
  aboutSectionBottom,
  skillSectionBottom
} from "./constants.js";


const works = [
  {
    id: 1,
    cate: 'Next',
    date: '2023. 11',
    title: 'Catch U Landing page',
    subText: '랜덤박스 서비스 캐치유 랜딩페이지 입니다.',
    src: '/assets/images/project_thumb1.png',
  },
  {
    id: 2,
    cate: 'Next',
    date: '2023. 06',
    title: 'With-PT',
    subText: '트레이너와 회원간 커뮤니케이션 모바일 웹 서비스를 구현중입니다.',
    src: '/assets/images/project_thumb2.png',
  },
  {
    id: 3,
    cate: 'Svelte kit',
    date: '2023. 06',
    title: 'Mnworks',
    subText: '스틸시리즈(SteelSeries) 국내 총판 업체 mnworks의 공식 사이트 및 관리자 페이지 입니다.',
    src: '/assets/images/project_thumb3.png',
  },
  {
    id: 4,
    cate: 'Svelte kit',
    date: '2023. 06',
    title: '대전청인설비공사',
    subText: '누수공사 전문업체인 대전청인설비공사의의 공식 사이트 및 관리자 페이지 입니다.',
    src: '/assets/images/project_thumb4.png',
  },
  {
    id: 5,
    cate: 'Next',
    date: '2023. 06',
    title: 'Geoinfotech',
    subText: '마이크로 킥보드 한국 공식 수입사 지오인포테크의 정품등록 페이지 입니다.',
    src: '/assets/images/project_thumb5.png',
  },
  {
    id: 6,
    cate: 'React',
    date: '2023. 01',
    title: 'LG My-car alram service',
    subText: 'TV - 차량 기기 연동 서비스입니다. 프로바이더 웹, 모바일 웹, 관리자용 페이지 총 세 도메인으로 나뉘어 있습니다.',
    src: '/assets/images/project_thumb6.png',
  },
  {
    id: 7,
    cate: 'React',
    date: '2022. 05',
    title: 'Stamp',
    subText: '직원 출결관리 서비스입니다. 직원용 페이지 및 관리자용 페이지로 나뉘어 있습니다.',
    src: '/assets/images/project_thumb7.png',
  },
  {
    id: 8,
    cate: 'React',
    date: '2021. 11',
    title: 'Cat-expiry',
    subText: '고양이 식료품 유통기한을 관리할 수 있는 모바일 웹 서비스 입니다.',
    src: '/assets/images/project_thumb8.png',
  },
]

let innerWorks = works.map(ele => `
<a href="/pages/project${ele.id}.html" data-id="${ele.id}">
<div class="works-img works-img-m"><img src="${ele.src}"/></div>
<div class="works-info">
<div class="works-info-date">
<div>${ele.cate}</div>
<div>${ele.date}</div>
</div>
<div class="works-info-name">${ele.title}</div>
<div class="works-info-exp">${ele.subText}</div>
</div>
</a>
`)

const htmlConvert = (inner) => {
  let innerWorks = inner.map(ele => `
  <a href="/pages/project${ele.id}.html" data-id="${ele.id}">
  <div class="works-img works-img-m"><img src="${ele.src}"/></div>
  <div class="works-info">
  <div class="works-info-date">
  <div>${ele.cate}</div>
  <div>${ele.date}</div>
  </div>
  <div class="works-info-name">${ele.title}</div>
  <div class="works-info-exp">${ele.subText}</div>
  </div>
  </a>
  `)

  return innerWorks
}
const worksList = document.querySelector('.works-right')
worksList.innerHTML = innerWorks.join('');
const worksCate = document.querySelectorAll('.works-cate > div');

const worksFilter = (idx) => {
  if (idx === 1) {
    const nextFilter = works.filter(ele => {
      return ele.cate === 'Next'
    })

    const result = htmlConvert(nextFilter)
    worksList.innerHTML = result.join('');

  } else if (idx === 2) {
    const reactFilter = works.filter(ele => {
      return ele.cate === 'React'
    })
    const result = htmlConvert(reactFilter)
    worksList.innerHTML = result.join('');
  } else if (idx === 3) {
    const svelteFilter = works.filter(ele => {
      return ele.cate.includes('Svelte')
    })
    const result = htmlConvert(svelteFilter)
    worksList.innerHTML = result.join('');
  } else {
    const all = works.filter(ele => {
      return ele
    })
    const result = htmlConvert(all)
    worksList.innerHTML = result.join('');
  }
}

worksCate.forEach((ele, idx) => {
  ele.addEventListener('click', () => worksFilter(idx))
})

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
}

window.addEventListener('scroll', onScroll)

const worksA = document.querySelectorAll('.works-right > a')
const WorksImg = document.querySelector('.works-img')
WorksImg.innerHTML = `<img src='/assets/images/project_thumb1.png'/>`
worksA.forEach(item => {
  item.addEventListener('mouseover', () => {
    const id = works.find(ele => ele.id == item.dataset.id)
    WorksImg.innerHTML = `<img src='/assets/images/project_thumb${id.id}.png'/>`
  })
})
