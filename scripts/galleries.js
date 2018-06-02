$(document).ready(function() {
	
	$(window).on("load", function() {
		$('.carousel').slick({
		lazyLoad: "ondemand",
		slidesToShow: 1,
		slidesToScroll: 1,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
		asNavFor: '.carousel-nav'
  });
	$('.carousel-nav').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      asNavFor: '.carousel',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      responsive: [
				{
					breakpoint: 1400,
					settings: {
						slidesToShow: 5
					}
				},
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3
          }
        }
      ]  
    });
//		$(".loader").hide();
//    $(".wrapper").show();
//		if (window.innerWidth > 550) {
//			$(".carousel-nav").show(); 
//		};
		
	});
	
	function nextSlide() {
		$(".arrows").addClass("arrowChange");
		$(".carousel").slick("slickNext");
	}
	
	function prevSlide() {
		$(".arrows").addClass("arrowChange");
		$(".carousel").slick("slickPrev");
	}
	
	function arrowKeyPress(event) {
		(event.keyCode === 39) ? nextSlide() : null;
		(event.keyCode === 37) ? prevSlide() : null;
	}
	
	window.addEventListener("keydown", function(event) {
		arrowKeyPress(event);
	});
	
	$(".arrows__right").on("click", nextSlide);
	
	$(".arrows__left").on("click", prevSlide);
	
	$(".carousel").on("afterChange", () => {
		$(".arrows").removeClass("arrowChange");
	});
	
	$(".fa-bars").on("click", () => {
		$("ul").toggleClass("flex");
	});
});

