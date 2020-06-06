$(function () {

	function loadRates() {
		$.getJSON('data/rates.json')
			.done(function(data) {
				let d = new Date();
				let hrs = d.getHours();
				let mins = d.getMinutes();

				let msg = `<h2>Exchange Rates</h2>`
				$.each(data, function(key, val) {
					msg += `<div class="${key}">${key}:${val}</div>`;
				});
			}).fail(function () {
				$('aside').append('Sorry, we cannot load rates.');
			}).always(function () {
				let reload = `<a href="#" id="refresh">`
				reload += `<img src="img/refresh.png" alt="refresh" /></a>`;
				$('#reload').html(reload);
				$('#refresh').on('click', function(e) {
					e.preventDefault();
					loadRates();
				});
			});
	}

	loadRates();

});