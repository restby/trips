const playVideo = () => {
  if (document.querySelector('[data-id="video"]')) {
    const videoPlayer = document.querySelector('[data-id="video"]');
    const videoBtnPlay = document.querySelector('.video__btn');
    videoPlayer.addEventListener('click', () => {

      const iframe = `<iframe id="youtube-video" src="${videoPlayer.dataset.src}" title="Бесплатные интерактивные онлайн-курсы." frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;

      videoPlayer.insertAdjacentHTML('beforeend', iframe);

      videoPlayer.classList.toggle('video__bg-hide');
      videoBtnPlay.classList.toggle('video__btn--hide');
    }, {once: true});
  }
};

export {playVideo};
