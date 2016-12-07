$(window).scroll(function() {
	if($(this).scrollTop() > 1){
		$(".csd-text").addClass("csd-text-hidden");
		$(".csd-text-hidden").removeClass("csd-text");
	}else
	{
		$(".csd-text-hidden").addClass("csd-text");
		$(".csd-text").removeClass("csd-text-hidden");
	}
});