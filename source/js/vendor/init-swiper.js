const heroSlider = document.querySelector('.hero__slider');
const toursSlider = document.querySelector('.tours__slider');

const initHeroSlider = () => {
  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      simulateTouch: false,
      watchOverflow: true,
      speed: 500,
      loop: true,
      autoHeight: true,
      pagination: {
        el: ".hero__slider-pagination",
        clickable: true,
      },
    });
  }
}
const initToursSlider = () => {
  if (toursSlider) {
    const swiper = new Swiper(toursSlider, {
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      speed: 500,
      loop: true,
      autoHeight: true,
      navigation: {
        nextEl: '.tours__arrow--next',
        prevEl: '.tours__arrow--prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },

        767: {
          slidesPerView: 2,
          spaceBetween: 18,
        },

        1199: {
          slidesPerView: 3,
          spaceBetween: 30,
        }
      },
    });
  }
}
export { initHeroSlider, initToursSlider }
