const heroSlider = document.querySelector('[data-hero__slider]');
const toursSlider = document.querySelector('[data-tours__slider]');
const educationSlider = document.querySelector('[data-education__slider]');
const reviewsSlider = document.querySelector('[data-reviews__slider]');
const featuresSlider = document.querySelector('[data-features__slider]');
const gallerySlider = document.querySelector('[data-gallery__slider]');

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
      slidesPerView: 'auto',
      breakpoints: {
        767: {
          spaceBetween: 30,
        },
        1199: {
          spaceBetween: 30,
        }
      },
    });
  }
}
const initFeaturesSlider = () => {
  if (featuresSlider) {
    const swiper = new Swiper(featuresSlider, {
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      speed: 500,
      autoHeight: true,
      slidesPerView: 'auto',
      navigation: {
        nextEl: '.features__arrow--next',
        prevEl: '.features__arrow--prev',
      },
      breakpoints: {
        1199: {
          spaceBetween: 30,
        }
      },
    });
  }
}
const initGallerySlider = () => {
  if (gallerySlider) {
    const swiper = new Swiper(gallerySlider, {
      simulateTouch: false,
      grabCursor: false,
      watchOverflow: true,
      speed: 500,
      navigation: {
        nextEl: '.gallery__arrow--next',
        prevEl: '.gallery__arrow--prev',
      },

      slidesPerView: 'auto',
      breakpoints: {
        320: {
          spaceBetween: 3,
        },

        767: {
          spaceBetween: 5,
        },

        1199: {
          spaceBetween: 5,
        }
      },
    });
  }
}
export { initHeroSlider, initToursSlider, initEducationSlider, initReviewsSlider, initFeaturesSlider, initGallerySlider }
