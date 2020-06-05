$(function () {
	let $window = $('window');

	let $slideAd = $("#slideAd");

	let endZone = $('#footer').offset().top - $window.height() - 500;

	$window.on('scroll', function() {
		if ((endZone) < $window.scrollTop()) {
			$slideAd.animate({ 'right': '0px' }, 250);
		} else {
			$slideAd.stop(true).animate({ 'right': '-360px'}, 250);
		}
	});
});