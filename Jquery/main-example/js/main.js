$(function () {
	// SETUP.

	let $list, $newItemForm, $ItemButton;
	$list = $('ul');	// Cache the unordered list.
	$newItemForm = $('#newItemForm');	// Cache the form to add new items.
	$newItemButton = $('#newItemButton');	// Cache buton to show form.
	let item = '';	// Item is an empty string.

	$('li').hide().each(function (index) {	// Hide list items.
		$(this).delay(450 * index).fadeIn(1600);	// Then fade them in.
	});

	// ITEM COUNTER.

	function updateCount() {
		let items = $('li[class!=complete]').length;		// Number of items in list.
		$('#counter').text(items);		// Added into counter circle.
	}

	updateCount();

	// SETUP FORM FOR NEW ITEMS.
	$newItemButton.show();
	$newItemForm.hide();
	$('#showForm').on('click', function () {
		$newItemButton.hide();
		$newItemForm.show();
	});

	// ADDING A NEW LIST ITEM.
	$newItemForm.on('submit', function(e) {
		e.preventDefault();

		let text = $('input:text').val();
		$list.append(`<li>${text}</li>`);
		$('input:text').val('');
		updateCount();
	});


	// CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT.
	$list.on('click', 'li', function() {
		let $this = $(this);
		let complete = $this.hasClass('complete');

		if (complete === true) {
			$this.animate({
				opacity: 0.0,
				paddingLeft: '+=180'
			}, 500, 'swing', function() {
				$this.remove();
			});
		} else {
			item = $this.text();
			$this.remove();
			$list
				.append(`<li class="complete">${item}</li>`)
				.hide()
				.fadeIn(300);

			updateCount();
		}
	});

	// Mouse over detail.

	let listItem, itemStatus, eventType;

	$('ul').on('click mouseover', {status: 'important'}, function(e) {
		listItem = `Item: ${e.target.textContent} <br/>`;
		itemStatus = `Status: ${e.data.status} <br/>`;
		eventType = `Event: ${e.type} <br/>`;
		$('#notes').html(listItem + itemStatus + eventType);
	});

	$('ul').on('mouseout', function() {
		$('#notes').html('Click or mouseover a item...');
	});

});