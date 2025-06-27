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

// Inisialisasi Swiper untuk semua slider portfolio dengan COVERFLOW EFFECT
document.addEventListener('DOMContentLoaded', function () {
  const portfolioSliders = document.querySelectorAll('.portfolio-slider');

  portfolioSliders.forEach(slider => {
    new Swiper(slider, {
      // Mengaktifkan efek 'coverflow' yang stabil dan modern
      effect: 'coverflow',

      // Kursor akan berubah menjadi ikon tangan saat di-hover
      grabCursor: true,

      // Slide yang aktif akan selalu berada di tengah
      centeredSlides: true,

      // Jumlah slide yang terlihat. 'auto' bekerja baik dengan ukuran gambar berbeda.
      // Anda juga bisa coba angka seperti 2 untuk menampilkan 2 slide sekaligus.
      slidesPerView: 'auto',

      // Pengaturan spesifik untuk efek coverflow
      coverflowEffect: {
        rotate: 50,         // Rotasi slide di samping
        stretch: 0,         // Jarak antar slide
        depth: 100,         // Efek kedalaman (3D)
        modifier: 1,        // Pengali efek
        slideShadows: true, // Menampilkan bayangan pada slide
      },

      // Menambahkan titik-titik paginasi (tetap berguna)
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