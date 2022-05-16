$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
  });

  $(".hamburger-menu").click(function (event) {
    $(".hamburger-menu,.menu").toggleClass("active");
    $("body").toggleClass("lock");
  });

  $(".menu-list-link").click(function (event) {
    $(".hamburger-menu, .menu").removeClass("active");
    $("body").removeClass("lock");
  });
});
