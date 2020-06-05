$(function () {
	$('h2').hide().slideDown();

	let li = $('li');

	li.hide().each(function (i) {
		console.log(i);
		$(this).delay(750 * i).fadeIn(500);
	});

	// li.on('click', function () {
	// 	$(this).fadeOut(700);
	// });

});