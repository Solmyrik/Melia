new Swiper('.bg-slider__body', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 6000,
    stopOnLastSlide: false,
    disableOnInterection: false,
  },
  speed: 800,
  effect: 'fade',
  on: {
    slideChange: function () {
      // Добавляем/удаляем класс 'active' для заголовка и описания
      this.slides.forEach((slide, index) => {
        slide
          .querySelector('.content-bg-slider__title')
          .classList.toggle('active', index === this.activeIndex);
        slide
          .querySelector('.content-bg-slider__description')
          .classList.toggle('active', index === this.activeIndex);
      });
    },
  },
});

const cardsSlider2 = new Swiper('.conveniences__block', {
  spaceBetween: 20,
  slidesPerView: 'auto',
});
