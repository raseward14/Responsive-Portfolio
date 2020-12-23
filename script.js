$('.carousel').carousel({
    interval: 2000
  })

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-link');
  const navLink = document.querySelectorAll('.nav-link li');
 
  burger.addEventListener('click',()=>{
      //Toggle Nav
      nav.classList.toggle('nav-active');
    
      //Animate Links
      navLink.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s';
        }
      });
  });
}

navSlide();


