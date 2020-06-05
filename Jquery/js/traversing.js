$(function () {

	let h2 = $('h2');
	$('ul').hide();

	h2.append('<a class="show">Show</a>');

	h2.on('click', function() {

		if (h2.find('a').text() === "Show") {
			h2.next()
				.each(function(i) {
				$(this).hide().delay(750 * i).fadeIn(700);
				})
				.children('.hot')
				.addClass('complete');
			h2.find('a').html('Hide');
		} else if (h2.find('a').text() === "Hide") {
			$('ul').hide().fadeOut(700);
			h2.find('a').html('Show');
		}
	});

});