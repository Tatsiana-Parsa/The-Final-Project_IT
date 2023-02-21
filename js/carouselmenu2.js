const slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = n => {
    for(let slide of slides) {
        slide.classList.remove('active'); 
    }
    slides[n].classList.add('active');
}

const prepareCurrentSlide = index => {
    activeSlide(index);
}

const nextSlide = () => {
    index = index === slides.length - 1 ? 0 : index + 1;
    prepareCurrentSlide(index);
}

const prevSlide = () => {
    index = index === 0 ? slides.length - 1 : index - 1;
    prepareCurrentSlide(index);
}

setInterval(nextSlide, 10000);






document.addEventListener('DOMContentLoaded', function() {

    const navInit = () => {
      const nav = document.querySelector('.nav')
      const links = document.querySelectorAll('.nav__li')
      const sections = document.querySelectorAll('.section')
      sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop) { 
          links.forEach(link => { 
            link.classList.remove('nav__li_active')
            if (link.dataset.section === section.dataset.section) { 
              link.classList.add('nav__li_active') 
            }
          })
        }
      })
    }
    navInit()
    window.addEventListener('scroll', () => {
      navInit()
    })  
  })