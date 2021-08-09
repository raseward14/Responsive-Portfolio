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
  });
}

$(function () {
  $('[data-toggle="popover"]').popover()
})

navSlide();


