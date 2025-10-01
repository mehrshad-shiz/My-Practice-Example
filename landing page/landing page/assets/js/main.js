$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    margin: 50,
    autoplay: true,
    slideBy: 2,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    center: true,
    dots: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
      },
      1200: {
        items: 4,
        nav: true,
      },
    },
  });
});
