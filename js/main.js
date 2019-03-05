$(document).ready(function () {
        // mobile-menu-active
    $('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991"
    });
    //slick
    $('.slider-active').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //testmonial
    $('.testmonial-active').slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    //brand
    $('.brand-active').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1
    });

    // counter
    $('.counter').counterUp({
        delay: 10,
        time: 10000
    });


});