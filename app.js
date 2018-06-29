$(document).ready(function() {

  $('.hero').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: false,
    //adaptiveHeight: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false
  });
	
	$(".fa-chevron-right").on("click", () => {
		$(".hero").slick("slickNext");
	});
	
	$(".fa-chevron-left").on("click", () => {
		$(".hero").slick("slickPrev");
	});
	
	$(".fa-bars").on("click", () => {
		$("ul").toggleClass("flex");
	});
	
	//smooth scrolling
	$("nav a").on("click",function() {
		let link = $(this).attr("href");
		$("html, body").animate({scrollTop: $(link).offset().top}, "slow");
		return false;
	});
	
	
})