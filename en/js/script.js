/*$(window).scroll(function() {
	if($(this).width()<767){
		$(".csd-text").addClass("csd-text-hidden");
		$(".csd-text-hidden").removeClass("csd-text");
	}else
	{
		if($(this).scrollTop() > 1){
			$(".csd-text").addClass("csd-text-hidden");
			$(".csd-text-hidden").removeClass("csd-text");
		}else{
			$(".csd-text-hidden").addClass("csd-text");
			$(".csd-text").removeClass("csd-text-hidden");
		}
	}
});
*/

$(document).ready(function(){
	if($(this).width()<767){
		$(".csd-text").addClass("csd-text-hidden");
		$(".csd-text-hidden").removeClass("csd-text");
	}else
	{
		$(".csd-text-hidden").addClass("csd-text");
		$(".csd-text").removeClass("csd-text-hidden");
	}
});

$(window).scroll(function() {
	var pos = $(this).scrollTop();
	console.log("pos = "+pos+"px");
	if($(this).width()<767){
		$(".csd-text").addClass("csd-text-hidden");
		$(".csd-text-hidden").removeClass("csd-text");
	}else
	if(pos == 0){
		$(".csd-text").css("margin-top", "-20px");
	}else
	if(pos <= 120){
		$(".csd-text").css("margin-top", (-20 - pos)+"px");
	}else{
		$(".csd-text").css("margin-top", "-120px");
	}
});