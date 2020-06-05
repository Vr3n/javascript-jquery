let xhr = new XMLHttpRequest();


xhr.onload = function () {
	// The following conditional check will only work on a server.
	if (xhr.status === 20) {
		document.getElementById('content').innerHTML = xhr.responseText;
	}
};

xhr.open('GET', 'data/data.html', true);
xhr.send(null);