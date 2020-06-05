$(function () {
	
	$(':header').addClass('headline');


	// $('li').on('click', function () {
	// 	$(this).toggle();
	// });

	// $('li[id!="one"]')
	// 	.hide()
	// 	.delay(500)
	// 	.fadeIn(1400);
	// $('li:lt(3)').hide().fadeIn(1500);

	$('li').each(function() {
		$(this).hide().delay(500).fadeIn(1500);
	});

	$('li em').addClass('seasonal');
	$('li.hot').addClass('favorite');

	// Changing the content.
	// $('li:contains("pine")').text('almonds');

	$('li.hot').html(function () {
		return `<em>${$(this).text()}</em>`
	});

	// Using onclick

	// $('li').on('click', function() {
		
	// 	$(this).addClass('complete');
	// });

	// $('li#one').remove();
});
