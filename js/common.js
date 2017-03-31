$(document).ready(function() { 

$(".menu_wrap li").click(function(){
		$(".menu_wrap li").removeClass("active");
		$(this).addClass("active");
	});

	$(".bxslider").bxSlider({
        captions: true
    });

});