const swiper = new Swiper('.swiper', {
    // Default parameters
    slidesPerView: 3,
    spaceBetween: 20, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        }

    }
);