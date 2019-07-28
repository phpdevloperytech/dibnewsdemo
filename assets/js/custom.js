function newsSlider() {
    $('.customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
                "breakpoint": 1200,
                "settings": {
                    "slidesToShow": 4
                }
            }, {
                "breakpoint": 992,
                "settings": {
                    "slidesToShow": 3
                }
            }, {
                "breakpoint": 768,
                "settings": {
                    "slidesToShow": 2
                }
            }, {
                "breakpoint": 480,
                "settings": {
                    "slidesToShow": 1
                }
            }]
    });
}
;
function categorySlider() {
    $('.customer-logos').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
                "breakpoint": 1200,
                "settings": {
                    "slidesToShow": 4
                }
            }, {
                "breakpoint": 992,
                "settings": {
                    "slidesToShow": 3
                }
            }, {
                "breakpoint": 768,
                "settings": {
                    "slidesToShow": 2
                }
            }, {
                "breakpoint": 480,
                "settings": {
                    "slidesToShow": 1
                }
            }]
    });
}
;
