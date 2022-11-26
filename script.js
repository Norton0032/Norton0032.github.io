new WOW().init();
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination"
      },
      breakpoints: {
        1400: {
          slidesPerView: 5,
          spaceBetween: 20
        },
        1250: {
            slidesPerView: 4,
            spaceBetween: 10
          },
        980: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        100: {
            slidesPerView: 1,
            spaceBetween: 20
          }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    keyboard: true,
  });
area_click= document.querySelector(".area_click");
n = document.getElementsByTagName("header");
area_click.addEventListener("click", burger);
function burger(e) {
    n[0].classList.toggle("nav_active");
    area_click.classList.toggle("area_active");
}