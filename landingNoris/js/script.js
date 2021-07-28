$(document).ready(function () {
  $(".hamburger-menu").click(function (event) {
    $(".hamburger-menu,.menu").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

function openProd(evt, prodName) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  const tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(prodName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
