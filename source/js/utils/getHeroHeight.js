const getHeroHeight = () => {
  if (document.querySelector('[data-header-element]')) {
    const headerElement = document.querySelector('[data-header]');
    const heroElement = document.querySelector('[data-hero]');
    const contentElements = heroElement.querySelectorAll('[data-hero-content]');

    const setHeight = () => {
      heroElement.style.marginTop = `-${headerElement.offsetHeight}px`;

      contentElements.forEach((contentElement) => {
        contentElement.style.paddingTop = `${headerElement.offsetHeight}px`;
      });
    };

    const observer = new MutationObserver(setHeight);
    observer.observe(headerElement, {
      childList: true,
      subtree: true,
    });

    setHeight();

    window.addEventListener('resize', () => {
      setHeight();
    });
  }
  return null;
};

export {getHeroHeight};
