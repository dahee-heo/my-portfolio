const headerEle = document.querySelector('#header')
const nav = document.querySelector('#nav')

headerEle.innerHTML = `
<div>
  <div>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>
`
nav.innerHTML = `
<div>
  <nav>
    <div class="nav-list">
      <a href="/"><div data-hover="Home"><div>Home</div></div></a>
      <a href="/#works"><div data-hover="Works"><div>Works</div></div></a>
      <a href="/#skills"><div data-hover="Skills"><div>Skill</div></div></a>
      <a href="/#about"><div data-hover="About"><div>About</div></div></a>
      <a href="/#career"><div data-hover="Career"><div>Career</div></div></a>
    </div>
  </nav>
</div>
`

const spans = document.querySelectorAll('#header span')

let click = false;
headerEle.addEventListener('click', () => {
  if (!click) {
    click = true;
    spans[0].style.transform = 'rotate(45deg) translate3d(5px, 6px, 0)'
    spans[1].style.opacity = '0'
    spans[2].style.transform = 'rotate(-45deg) translate3d(6px, -6px, 0)'
    nav.classList.add('show')
  } else {
    click = false;
    spans[0].style.transform = 'rotate(0) translate3d(0, 0, 0)'
    spans[1].style.opacity = '1'
    spans[2].style.transform = 'rotate(0) translate3d(0, 0, 0)'
    nav.classList.remove('show')
  }
})

const navList = document.querySelectorAll('.nav-list a')
navList.forEach(list => {
  list.addEventListener('click', () => {
    nav.classList.remove('show');
    click = false;
    spans[0].style.transform = 'rotate(0) translate3d(0, 0, 0)'
    spans[1].style.opacity = '1'
    spans[2].style.transform = 'rotate(0) translate3d(0, 0, 0)'
  })
})