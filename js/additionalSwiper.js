
window.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper('.gallery-swiper-container', {
        direction: 'horizontal',
        slidesPerView: 'auto',
        spaceBetween: 12,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        // navigation: {
        //   nextEl: '.swiper-button-next',
        //   prevEl: '.swiper-button-prev',
        // },

        // autoplay: {
        //   delay: 4000,
        // },
      
        breakpoints: {
          // when window width is >= 320px
          360: {
            slidesPerView: 5,
            spaceBetween: 7
          },
          // when window width is >= 480px
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 16
        //   },
          // when window width is >= 640px
          1260: {
            slidesPerView: 5,
            spaceBetween: 12
          }
        }

      });

      let gallerySlides = document.getElementsByClassName('gallerySwiper')[0].getElementsByClassName('swiper-slide');

      try {
        for (let elem in gallerySlides) {
            (() => {
                gallerySlides[elem].addEventListener('click', () => {
                    // console.log(gallerySlides[elem].style.backgroundImage)
                    document.getElementsByClassName('galleryMain')[0].style.opacity = 0;
                    setTimeout(() => {
                        document.getElementsByClassName('galleryMain')[0].style.opacity = 1;
                        document.getElementsByClassName('galleryMain')[0].style.backgroundImage = gallerySlides[elem].style.backgroundImage + "";
                    }, 200);
                });
            })()
        }
    } catch (e) {
        console.log(e);
    }

    let activeSlide = 0;
    let slidesCount = document.getElementsByClassName('gallery-swiper-container')[0].getElementsByClassName('swiper-slide').length;

    let galleryControllers = document.getElementsByClassName('galleryMainController');

    galleryControllers[0].addEventListener('click', () => {
        if (!activeSlide) {
            activeSlide = slidesCount - 1; 
            // for (let i = 0; i < slidesCount; i++) {
            //     swiper.slideNext();
            // }
        } else activeSlide--;
        gallerySlides[activeSlide].click();
        swiper.slidePrev();
    });

    galleryControllers[1].addEventListener('click', () => {
        if (activeSlide + 1 == slidesCount) {
            activeSlide = 0; 
            // for (let i = 0; i < slidesCount; i++) {
            //     swiper.slidePrev();
            // }
        } else activeSlide++;
        gallerySlides[activeSlide].click();
        swiper.slideNext();
    });
});