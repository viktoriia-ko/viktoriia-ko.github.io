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
});
