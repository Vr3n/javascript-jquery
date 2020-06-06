let elMap = document.getElementById('loc');
let msg = 'Sorry, we were unable to get your location.'


if (Modernizr.geolocation) {
	navigator.geolocation.getCurrentPosition(success, fail);
	elMap.textContent = `Checking location ...`;
} else {
	elMap.textContent = msg;
}

function success(position) {
	msg += `<h3>Longitude:<br /> ${position.coords.latitude}</h3>
		<h3>Latitude:<br />${position.coords.longitude}</h3>;
	`
	elMap.innerHTML = msg;
}


function fail(msg) {
	elMap.textContent = msg;
	console.log(msg.code);
}