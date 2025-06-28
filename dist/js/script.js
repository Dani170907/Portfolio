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

// Inisialisasi Swiper untuk semua slider (Portfolio & Activity) dengan ZOOM
document.addEventListener('DOMContentLoaded', function () {
  // Pilih semua slider dari kedua section
  const allSliders = document.querySelectorAll('.portfolio-slider, .activity-slider');

  allSliders.forEach(slider => {
    new Swiper(slider, {
      // Mengaktifkan efek 'coverflow'
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',

      // Pengaturan untuk efek coverflow
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },

      // 👇 MENGAKTIFKAN FITUR ZOOM 👇
      zoom: true,

      // Menambahkan titik-titik paginasi
      pagination: {
        el: slider.parentElement.querySelector('.swiper-pagination'),
        clickable: true,
      },

      // Navigasi dengan keyboard
      keyboard: {
        enabled: true,
      },
    });
  });
});