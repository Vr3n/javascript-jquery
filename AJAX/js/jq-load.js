// User clicks the new link.
$('nav a').on('click', function(e) {
	e.preventDefault();		// Prevent loading url.
	let url = this.href;	// get val

	$('nav a.current').removeClass('current');
	$(this).addClass('current');

	$('#container').remove();
	$('#content').load(url + ' #content').hide().fadeIn('slow');
});