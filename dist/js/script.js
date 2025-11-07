// Navbar Fixed
window.onscroll = function() {
   const header = document.querySelector('header');
   const fixedNav = header.offsetTop;
   const toTop = document.querySelector('#to-top')

   if (window.pageYOffset > fixedNav) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden')
      toTop.classList.add('flex');
    } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex')
      toTop.classList.add('hidden');
   }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
   hamburger.classList.toggle('hamburger-active');
   navMenu.classList.toggle('hidden');
})


// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

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

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function() {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

// posisi toggle sesuai mode
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }
