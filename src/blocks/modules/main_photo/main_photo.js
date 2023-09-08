import $ from 'jquery';
import 'slick-carousel';

const MainPhoto = class MainPhoto {
    constructor(){}
    initSlider() {
        document.addEventListener('DOMContentLoaded', () => {
            $('.js_main_photo').slick({
                slidesToShow: 2,
                arrows: true,
                dots: true,
                slidesToScroll: 1,
                responsive: [
                    {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                    }
                ]
            });
        });
    }
    init() {
        this.initSlider();
    }
}

export default MainPhoto;