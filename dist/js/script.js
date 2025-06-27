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

// Inisialisasi Swiper untuk semua slider portfolio dengan CARD EFFECT
document.addEventListener('DOMContentLoaded', function () {
  const portfolioSliders = document.querySelectorAll('.portfolio-slider');

  portfolioSliders.forEach(slider => {
    new Swiper(slider, {
      // Mengaktifkan card effect
      effect: 'cards',

      // Membuat kursor menjadi ikon tangan saat di-hover
      grabCursor: true,

      // Mengaktifkan navigasi dengan keyboard (opsional, tapi bagus)
      keyboard: {
        enabled: true,
      },

      // Opsi spesifik untuk card effect (bisa dikustomisasi)
      cardsEffect: {
        slideShadows: true, // Memberi efek bayangan pada kartu
        rotate: true,       // Kartu akan sedikit berputar saat digeser
      },
    });
  });
});