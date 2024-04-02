export function isScript() {



  $(document).ready(function () {
    $(".slider-initiatives").on(
      "init reInit afterChange",
      function (event, slick, currentSlide, nextSlide) {
        let currentSlideNumber = (currentSlide ? currentSlide : 0) + 1;
        let totalSlides = slick.slideCount;

        $(".current-slide").text(currentSlideNumber);
        $(".total-slides").text(totalSlides);
      }
    );

    $(".slider-initiatives").slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 767.98,
          settings: "unslick",
        },
      ],
    });
  });


  $(document).ready(function () {

      $(".slider-partners").on(
        "init reInit afterChange",
        function (event, slick, currentSlide, nextSlide) {
          let currentSlideNumber = (currentSlide ? currentSlide : 0) + 1;
          let totalSlides = slick.slideCount;

          $(".current-slide_1").text(currentSlideNumber);
          $(".total-slides_1").text(totalSlides);
        }
      );


    $(".slider-partners").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      adaptiveHeight: true,
      dots: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 479.98,
          settings: "unslick", 
        },
      ],
    });
  });




  //=====================================


  let accordionTitles = document.querySelectorAll(".accordion__title");

  accordionTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      let target = this.getAttribute("data-accordion-target");
      let content = document.querySelector(target);
      let expanded = this.getAttribute("aria-expanded") === "true";

      this.setAttribute("aria-expanded", !expanded);
      content.setAttribute("aria-hidden", expanded);

      if (!expanded) {
        this.focus();
      }
    });

    title.addEventListener("keydown", function (event) {
      if (event.keyCode === 13 || event.keyCode === 32) {
        event.preventDefault();
        this.click();
      }
    });
  });

  //===================================





}