
$(function () {
	
	$('#content a').on('click', function(e) {
		e.preventDefault();
		console.log("Clicked!");
		console.log(e.target.id);
		let queryString = `vote= ${e.target.id}`;
		$.get('votes.php', queryString, function(data) {
			$('#content').html(data);
		});
	});

});
