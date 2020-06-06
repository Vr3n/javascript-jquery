$(function () {
	function loadContent(url) {
		$('#content').load(url + ' #container').hide().fadeIn('slow');
	}

	$('nav a').on('click', function (e) {
		e.preventDefault();
		let href = this.href;
		let $this = $(this);
		$('a').removeClass('current');
		$this.addClass('current');
		loadContent(href);
		history.pushState('', $this.text, href);
	});

	window.onpopstate = function () {
		let path = location.pathname;
		loadContent(path);
		let page = path.substring(location.pathname.lastIndexOf('/') + 1);
		$('a').removeClass('current');
		$(`'[href="${page}"]'`).addClass('current');
	}
});