var main = function () {
	$('.login').click(function(){
		$(this).find('.dropdown-menu').toggle();
	});
}

$(document).ready(main);