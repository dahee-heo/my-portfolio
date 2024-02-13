export const main = document.querySelector('main');

export const viewportHeight = window.innerHeight;

//intro section
export const introSection = document.querySelector('.intro-section');

//about section
export const aboutSection = document.querySelector('.about-section');
export const aboutSectionRect = aboutSection.getBoundingClientRect();
export const aboutSectionTop = aboutSectionRect.top + window.scrollY;
export const aboutSectionBottom = aboutSectionRect.bottom + window.scrollY;
export const aboutSectionWrap = document.querySelector('.about-section__wrap');
export const profileLeft = document.querySelectorAll('.profile-left');
export const aboutText = document.querySelectorAll('.about-txt > div')

//skill section
export const skillSection = document.querySelector('.skill-section');
export const skillSectionRect = skillSection.getBoundingClientRect();
export const skillSectionTop = skillSectionRect.top + window.scrollY;
export const skillSectionBottom = skillSectionRect.bottom + window.scrollY;
export const skillItems = document.querySelectorAll('.skill-item')

//works section
export const worksSection = document.querySelector('.works-section');
export const worksSectionRect = worksSection.getBoundingClientRect();
export const worksSectionTop = worksSectionRect.top + window.scrollY;
export const worksSectionBottom = worksSectionRect.bottom + window.scrollY;
export const worksItems = document.querySelectorAll('.works-grid a');

//career section
export const careerSection = document.querySelector('.career-section');
export const careerSectionRect = careerSection.getBoundingClientRect();
export const careerSectionTop = careerSectionRect.top + window.scrollY;
export const careerSectionBottom = careerSectionRect.bottom + window.scrollY;
export const careerSectionWrap = document.querySelector('.career-section__wrap');
export const careerList = document.querySelector('.career-list')
export const careerItems = document.querySelectorAll('.career-list-item')

//contact section
// export const contactSection = document.querySelector('.contact-section');
// export const contactSectionRect = contactSection.getBoundingClientRect();
// export const contactSectionTop = contactSectionRect.top + window.scrollY;
// export const contactSectionBottom = contactSectionRect.bottom + window.scrollY;

// style
export const root = document.querySelector(':root');
export const rootStyles = getComputedStyle(root);
export const violetBg = rootStyles.getPropertyValue('--violet-bg')
export const violet = rootStyles.getPropertyValue('--violet');
export const white = rootStyles.getPropertyValue('--white');
export const black = rootStyles.getPropertyValue('--black');
export const primary = rootStyles.getPropertyValue('--primary-purple');
export const lime = rootStyles.getPropertyValue('--secondary-lime');
export const pink = rootStyles.getPropertyValue('--secondary-pink');

export const showPoint = Math.ceil(window.innerHeight) / 3 * 2;