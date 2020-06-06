$(function () {

	$('nav a').on('click', function(e) {
		e.preventDefault();

		let url = this.href;
		let content = $('#content');

		$('nav a.current').removeClass('current');
		$(this).addClass('current');
		$('#container').remove();

		$.ajax({
			type: 'POST',
			url: url,
			timeout: 2000,
			beforeSend: function() {
				content.append(`<div id="load">Loading</div>`);
			},
			complete: function() {
				$('#load').remove();
			},
			success: function() {
				content.html($(data).find('#container')).hide().fadeIn(400);
			},
			fail: function() {
				$("#panel").html(`<div class="loading">Please Tr again soon.</div>`);
			}
		});

	});

});