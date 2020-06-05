$(function () {

	let ids = '';
	let listItems = $('li');

	// listItems.on('mouseover', function () {
	// 	ids = this.id;
	// 	listItems.children('span').remove();
	// 	$(this).append(`<span class="priority">${ids}</span>`);
	// });

	// listItems.on('mouseout', function () {
	// 	$(this).children('span').remove();
	// });


	$('li').on('mouseover click', function(e) {
		$('li span').remove();
		let date = new Date();

		date.setTime(e.timeStamp);

		let clicked = date.toDateString();
		$(this).append(`<span class="date"> ${clicked} ${e.type}</span>`)
	});


});