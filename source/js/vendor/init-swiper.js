const heroSlider = document.querySelector('.hero__slider');

const initHeroSlider = () => {
  if (heroSlider) {
    const swiper = new Swiper(heroSlider, {
      simulateTouch: false,
      watchOverflow: true,
      speed: 500,
      loop: true,
      autoHeight: true,
    });
  }
}

export { initHeroSlider }
