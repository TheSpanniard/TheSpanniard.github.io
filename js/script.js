var main = function() {

	// if the hamburger icon is clicked
	$('.hamburger').click(function() {
		// then the menu slides out from the left off-screen
		$('.nav').animate({
			left: "-10px"
		}, 400)
	});

	// checking to see if the body of the site has been clicked
	$('main').click(function() {
		// then slide the menu back off-screen
		$('.nav').animate({
			left: "-300px"
		}, 400)
	});
}

$(document).ready(main);