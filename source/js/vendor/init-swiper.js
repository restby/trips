const heroSlider = document.querySelector('.hero__slider');
const toursSlider = document.querySelector('.tours__slider');
const educationSlider = document.querySelector('.education__slider');
const reviewsSlider = document.querySelector('.reviews__slider');

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
const initEducationSlider = () => {
  if (educationSlider) {
    const swiper = new Swiper(educationSlider, {
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      speed: 500,
      autoHeight: true,
      navigation: {
        nextEl: '.education__arrow--next',
        prevEl: '.education__arrow--prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },

        767: {
          slidesPerView: 3,
          spaceBetween: 10,
        },

        1199: {
          slidesPerView: 4,
          spaceBetween: 10,
        }
      },
    });
  }
}
const initReviewsSlider = () => {
  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      speed: 500,
      autoHeight: true,
      navigation: {
        nextEl: '.reviews__arrow--next',
        prevEl: '.reviews__arrow--prev',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },

        767: {
          slidesPerView: 1.26,
          spaceBetween: 10,
        },

        1199: {
          slidesPerView: 1.63,
          spaceBetween: 10,
        }
      },
    });
  }
}
export { initHeroSlider, initToursSlider, initEducationSlider, initReviewsSlider }
