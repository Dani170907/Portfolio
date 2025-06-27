// Navbar Fixed
window.onscroll = function() {
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;

   if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
   } else {
      header.classList.remove('navbar-fixed');
   }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
   hamburger.classList.toggle('hamburger-active');
   navMenu.classList.toggle('hidden');
})

// Inisialisasi Swiper untuk semua slider portfolio dengan AUTOPLAY
document.addEventListener('DOMContentLoaded', function () {
  const portfolioSliders = document.querySelectorAll('.portfolio-slider');

  portfolioSliders.forEach(slider => {
    new Swiper(slider, {
      loop: true,

      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },

      pagination: {
        el: slider.parentElement.querySelector('.swiper-pagination'),
        clickable: true,
      },

      keyboard: {
        enabled: true,
      },
    });
  });
});