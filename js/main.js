$(function () {
  var mixer = mixitup('.portfolio__content');
});

$(function () {
  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false
        }
      }
    ]
  });
});

$(function () {
  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active');
  });
});

$('a[href^="#"').on('click', function () {
  let href = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, 2500);
  return false;
});

