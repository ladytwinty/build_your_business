$(document).ready(function() { 

$(".menu_wrap li").click(function(){
		$(".menu_wrap li").removeClass("active");
		$(this).addClass("active");
	});

	$(".bxslider").bxSlider();

	$(".slider2").bxSlider({
    slideWidth: 180,
    captions: true,
    minSlides: 4,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 20
  });

	$(".slider3").bxSlider({
    slideWidth: 180,
    captions: true,
    minSlides: 4,
    maxSlides: 8,
    moveSlides: 1,
    slideMargin: 20
  });

});