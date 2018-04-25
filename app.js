$(document).ready(function() {
  $('.hero').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: false,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });
	
	$(".fa-bars").on("click", () => {
		$("ul").toggleClass("flex");
	});
})