$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    appendArrows: $('.arrows'),
    prevArrow: '<button type="button" class="prev"><img src="assets/images/arrow.svg" width="50px"></img></button>',
    nextArrow: '<button type="button" class="next"><img src="assets/images/arrow.svg" width="50px"></img></button>',
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 3,
        }
      },
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        centerPadding: '50px',
      }
    }
  ]
  });
});
