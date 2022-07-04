export const settings = {
  dots: true,
  infinite: false,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
