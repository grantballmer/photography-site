$(document).ready(function() {
  $('.carousel').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });
	
	$(".arrows__right").on("click", () => {
		$(".arrows").addClass("arrowChange");
		$(".carousel").slick("slickNext");
	});
	
	$(".carousel").on("afterChange", () => {
		$(".arrows").removeClass("arrowChange");
	});
	
	$(".arrows__left").on("click", () => {
		$(".arrows").addClass("arrowChange");
		$(".carousel").slick("slickPrev");
	});
	
	$(".fa-bars").on("click", () => {
		$("ul").toggleClass("flex");
	});
})

