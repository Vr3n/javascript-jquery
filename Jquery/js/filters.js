$(function () {
	let listItems = $('li');
	listItems.filter('.hot:last').removeClass('hot');

	$('li:not(.hot)').addClass('cool');
	listItems.has('em').addClass('complete');

	listItems.each(function () {
		let $this = $(this);
		if ($this.is('.hot')) {
			$this.prepend('Priority Item: ');
		}
	});

	$('li:contains("honey")').append(' (local)');
	console.log("Filtering finished!");


	console.log("click loaded ");

	console.log($('li[class*="complete"]'));

	$('li[class*="complete"]').on('click', function () {
	console.log("click ");
	$(this).animate({
		opacity: 0.0,
		paddingLeft: '+=100'
	}, 500, function () {
		$(this).remove();
	});
});
});