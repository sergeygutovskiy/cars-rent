
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

        autoplay: {
          delay: 4000,
        },
      
        breakpoints: {
          // when window width is >= 320px
          100: {
            slidesPerView: 'auto',
            centeredSlides: true,
            // loop: false,
            spaceBetween: 0
          },
          // when window width is >= 480px
          768: {
            slidesPerView: 3,
            spaceBetween: 16
          },
          // when window width is >= 640px
          1260: {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }

      });
});