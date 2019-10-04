$('.menu__nav-btn').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu--active');
    $('.wrapper').toggleClass('wrapper__active');
    $('.overlay').toggleClass('overlay__active');
    $('.menu__burger').toggleClass('menu__burger--active');
    $('.menu__nav-btn').toggleClass('menu__nav-btn--active');
    $('html').toggleClass('overflow');
    $('body').toggleClass('overflow');
});

$('.overlay').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu--active');
    $('.wrapper').toggleClass('wrapper__active');
    $('.overlay').toggleClass('overlay__active');
    $('.menu__burger').toggleClass('menu__burger--active');
    $('.menu__nav-btn').toggleClass('menu__nav-btn--active');
    $('html').toggleClass('overflow');
    $('body').toggleClass('overflow');
});