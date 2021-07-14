$(document).ready(function () {
  $(".hamburger-menu").click(function (event) {
    $(".hamburger-menu,.menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
