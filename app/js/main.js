(function ($) {
  'use strict';
  $('.nonloop-block-13').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    stagePadding: 0,
    margin: 20,
    autoplay: true,
    autoHeight: true,
    nav: true,
    navText: ['‹', '›'],
    responsive: {
      600: {
        margin: 0,
        stagePadding: 10,
        items: 1,
      },
      1000: {
        margin: 0,
        stagePadding: 0,
        items: 1,
      },
      1200: {
        margin: 0,
        stagePadding: 0,
        items: 1,
      },
    },
  });

  //aos
  AOS.init({
    offset: 150,
    duration: 1000,
    easing: 'ease-in-out-back',
    once: true,
  });

  //scroll
  $('.nav-link').on('click', function () {
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      {
        duration: 1000,
        easing: 'easeInOutExpo',
      },
    );
  });

  $('.menu-bar').on('click', function (e) {
    e.preventDefault();
    $('nav').toggleClass('hide-menu');
    $(this).toggleClass('active');
  });
})(jQuery);
