$("#register").on("submit", function(e) {
	e.preventDefault();

	let detail = $('#register').serialize();

	$.post('register.php', details, function(data) {
		$("#register").html(data);
	});
});