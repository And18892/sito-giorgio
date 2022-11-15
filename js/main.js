

function myFunction() {
  document.getElementById("demo").classList.toggle("move");
  document.getElementById("under-page").classList.toggle("under-page-clicked");
  document.getElementById("circle-projects").classList.toggle("circle-projects-clicked");
}


$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true
});

new WOW().init();
