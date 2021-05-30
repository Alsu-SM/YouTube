const swiper = new Swiper('.channel-slider', {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

const swiper2 = new Swiper('.recommended-slider', {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: '.recommended-button-next',
    prevEl: '.recommended-button-prev',
  },
});

const swiper3 = new Swiper('.food-slider', {
  // Optional parameters

  loop: true,
  slidesPerView: 1,
  breakpoints: {
    1900: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    760: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 20,

  // Navigation arrows
  navigation: {
    nextEl: '.food-button-next',
    prevEl: '.food-button-prev',
  },
});

const searchButton = document.querySelector('.mobile-search');
const mobileSearch = document.querySelector('.input-group');
searchButton.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});
if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  swiper2.destroy();
  swiper3.destroy();
}
