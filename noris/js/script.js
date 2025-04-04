$(document).ready(function () {
  $(".slider").slick({
    speed: 2000,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    cssEase: "linear",
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
