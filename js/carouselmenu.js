// Head slides

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



// Tutorial slides

const pages = document.querySelectorAll('.page');
const dots = document.querySelectorAll('.dot');

let index2 = 0;

const activePage = n => {
    for(let page of pages) {
        page.classList.remove('active'); 
    }
    pages[n].classList.add('active');
}

const activeDot = n => {
    for(let dot of dots) {
        dot.classList.remove('active');
    } 
    dots[n].classList.add('active');
}

const prepareCurrentPage = index2 => {
    activePage(index2);
    activeDot(index2);
}

const nextPage = () => {
    index2 = index2 === pages.length - 1 ? 0 : index2 + 1;
    prepareCurrentPage(index2);
}

const prevPage = () => {
    index2 = index2 === 0 ? pages.length - 1 : index2 - 1;
    prepareCurrentPage(index2);
}

dots.forEach((item, index2Dot)=> {
    item.addEventListener('click', () => {
        index2 = index2Dot;
        prepareCurrentPage(index2);
    })
})

setInterval(nextPage, 10000);



// Scroll

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




// Button - Choose your certificate

function setCaretPosition(o, pos) {
    o = document.getElementById(o);
    if(o.setSelectionRange) {
        o.focus();
        o.setSelectionRange(pos, pos);
    } else if (o.createTextRange) {
        var range = o.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
    }
}




// Mask for phone + validate (tel; mail)

function setCursorPosition(pos, e) {
    e.focus();
    if (e.setSelectionRange) e.setSelectionRange(pos, pos);
    else if (e.createTextRange) {
      var range = e.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

 
  function mask(e) {
    let i = 0;
    let matrix = "+375(___)___-__-__";
    let def = matrix.replace(/\D/g, "");
    let val = this.value.replace(/\D/g, "");

    def.length >= val.length && (val === def);
    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });

    this.value = matrix;
    i = matrix.lastIndexOf(val.substr(-1));
    if (i < matrix.length && matrix !== this.placeholder ? i++ : i = matrix.indexOf("_"));
    setCursorPosition(i, this)
  }

  window.addEventListener("DOMContentLoaded", function() {
    let input = document.querySelector("#mobPhone");
    input.addEventListener("input", mask, false);
    input.focus();
    setCursorPosition(4, input);
  });

  function validateForm() {
    let tel = document.getElementById('mobPhone');
    const pattern = tel.getAttribute('pattern');
    const regExp = new RegExp(pattern);

    let email = document.getElementById('letter');
    const pattern_2 = email.getAttribute('pattern_2');
    const regExp_2 = new RegExp_2(pattern_2);
    
    if (!regExp.test(tel.value) || !regExp_2.test(email.value)) {
        return false;
    } else {
        return true;
    }   
};

document.getElementById('f1').addEventListener('submit', validateForm);




// Submit + Reset

let button = document.getElementById("bt1"); 
  button.addEventListener('click', confirmSend);
  bt1.onsubmit = confirmSend;
  function confirmSend() {
    if(!validateForm()) {
        return false;
    } else {
        return true;
    } 
  }; 



let form = document.getElementById('f1');
let inputSurname = document.getElementById('surname');
let inputName = document.getElementById('myName');
let inputDate = document.getElementById('date');
let inputTel = document.getElementById('mobPhone');
let inputMail = document.getElementById('letter');
let select = document.getElementById('custCert');


if (localStorage.length != 0) {
  inputSurname.value = localStorage.surname;
  inputName.value = localStorage.myName;
  inputDate.value = localStorage.date;
  inputTel.value = localStorage.mobPhone;
  inputMail.value = localStorage.letter;
  select.value = localStorage.custCert;
};

let clientForm = {
  surname: inputSurname.value,
  name: inputName.value,
  date: inputDate.value,
  phone: inputTel.value,
  email: inputMail.value,
  summ: select.value
};

localStorage.setItem('clientForm', JSON.stringify(clientForm));

form.addEventListener('submit', () => {
  localStorage.surname = inputSurname.value;
  localStorage.myName = inputName.value;
  localStorage.date = inputDate.value;
  localStorage.mobPhone = inputTel.value;
  localStorage.letter = inputMail.value;
  localStorage.custCert = select.value;
});

document.getElementById('f1').addEventListener('reset', () => {
  inputSurname.value === '';
  inputName.value === '';
  inputDate.value === '';
  inputTel.value === '';
  inputMail.value === '';
  select.value === '';
});

//console.log(clientForm);