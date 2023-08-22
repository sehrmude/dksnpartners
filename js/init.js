//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "30 September 2023 18:00:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	