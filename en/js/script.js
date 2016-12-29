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
	if($(this).width()<767){
		$(".csd-text").addClass("csd-text-hidden");
		$(".csd-text-hidden").removeClass("csd-text");
	}else{
		if(pos == 0){
			$(".csd-text").css("margin-top", "-20px");
		}else
		if(pos <= 120){
			$(".csd-text").css("margin-top", (-20 - pos)+"px");
		}else{
			$(".csd-text").css("margin-top", "-120px");
		}
	}
});
//nav-bar behaiour
$(".dropdown").mouseover(function(){
	if($(window).width() > 767){
		$(this).addClass("open");
	}
});

$(".dropdown").mouseout(function(){
	if($(window).width() > 767){
		$(this).removeClass("open");
	}
});
//

$(".spoiler").click(function(){
	c=1;
	while($("#spoiler-"+c).length != 0){
		$("#spoiler-"+c).removeClass("in");
		
		c++;
	}
	$(this).addClass("in");
});



//
$(".help-link").mouseover(function(){
	console.log("over");
	$(this).css("transition","1s");
	$(this).css("width","150px");
	$(this).css("height","150px");
}
);

$(".help-link").mouseout(function(){
	console.log("out");
	$(this).css("width","128px");
	$(this).css("height","128px");
}
);