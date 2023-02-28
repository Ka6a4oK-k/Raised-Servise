
const swiper = new Swiper('.swiper', {
    slidesPerView: 2,
    breakpoints: {
      800: {
        slidesPerView: 3,
      }},
    loop: true,
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
});