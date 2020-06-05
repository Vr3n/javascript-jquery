$(function() {
	let listItem, itemStatus, eventType;
	
	$('ul').on(
		'click mouseover',
		{status: 'important'},
		function(e) {
			listItem = `Item: ${e.target.textContent} <br />`;
			itemStatus = `Status: ${e.data.status} <br />`;
			eventType = `Event: ${e.type}`;
			$('#notes').html(listItem + itemStatus + eventType);
		}
	);

	$('ul').on('mouseout', function () {
		$('#notes').html(`Click or mouseover a hot item..`);
	});

});