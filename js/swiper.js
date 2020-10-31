
window.addEventListener('DOMContentLoaded', () => {
    var mySwiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        breakpoints: {
          // when window width is >= 320px
          360: {
            slidesPerView: 'auto',
            spaceBetween: 20
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          // when window width is >= 640px
          1366: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }

      });
});