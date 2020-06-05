let xhr = new XMLHttpRequest();

xhr.onload = function () {
	if (xhr.status === 200) {
		responseObject = JSON.parse(xhr.responseText);

		// BUILD UP STRING WITH NEW CONTENT (could also use DOM manipulation).
		let newContent = '';

		for (let i = 0; i < responseObject.events.length; i++) {
			newContent += `<div class="event">
				<img src="${responseObject.events[i].map}" alt="${responseObject.events[i].location}" />
				<p><b>${responseObject.events[i].location}</b><br />${responseObject.events[i].date}</p>
			</div>`;
		}

		// Update the page with the new content.
		document.getElementById('content').innerHTML = newContent;
	}
};

xhr.open('GET', 'data/data.json', true);
xhr.send();