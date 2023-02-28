function getSlides() {
  if (window.screen.width < 800) {
    console.log(2);
    return 2
  } else {
    console.log(3);
    return 3
  }
}

const swiper = new Swiper('.swiper', {
    slidesPerView: getSlides(),
    loop: true,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});