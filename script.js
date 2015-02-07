var main = function () {
	// Toggle Login menu
	$('.login').click(function(){
		$(this).find('.dropdown-menu').toggle();
	});
	// Accordion Function
	$('#accordion').accordion();

	// Unslider
	$('.banner').unslider();

}

$(document).ready(main);