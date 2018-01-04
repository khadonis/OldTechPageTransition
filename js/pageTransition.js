$(document).ready(function() {
	var w = $(window).width();
	$("#wrapper").css("left", -w);

    $("#wrapper").animate({left: '0px'},500);
    
	$(".links a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("#wrapper").animate({left: w}, 1000, redirectPage);		
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});