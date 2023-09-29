const bannerSwiper = new Swiper('.banner-swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});
const partnerSwiper = new Swiper('.partner-swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    }
});

const categoryCardSwiper = new Swiper('.category-card-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
            grid: {
                fill: 'row',
                rows: 2,
            },
        },
    }
})

const productGridSwiper = new Swiper('.products-swiper.grid-swiper', {
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2,
            spaceBetween: 20,
            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
            grid: {
                fill: 'row',
                rows: 2,
            },
        },
    }
})
const productSwiper = new Swiper('.products-swiper.row-swiper', {
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
})

const productThumbSwiper = new Swiper(".product-thumb-swiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
});
var productMainSwiper = new Swiper(".product-main-swiper", {
    spaceBetween: 10,
    thumbs: {
        swiper: productThumbSwiper,
    },
});

