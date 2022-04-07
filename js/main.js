$(function () {
  $('.slider__inner').slick({
    arrows: false,
    dots: true,
  });

  $('.works__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="../images/works/slider/slide-left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="../images/works/slider/slide-right.svg" alt=""></button>',
    responsive: [
      {
        breakpoint: 911,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 455,
        settings: {
          slidesToShow: 1,
        }
      },
    ],
  });

  $('.menu__btn').on('click', function () {
    $('.menu__list').slideToggle();
  });

  $('.header__drop-down.drop-down').on('click', function () {
    $(this).children('.drop-down__list').toggleClass('active');
    $(this).children('.drop-down__link').toggleClass('active');
  });
});

