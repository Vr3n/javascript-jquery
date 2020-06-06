function showEvents(data) {
	let newContent = '';

	// BUILD UP STRING WITH NEW CONTENT (can also use DOM manipulation).

	for (let i = 0; i < data.events.length;i++) {
		newContent += `<div class="event">
			<img src="${data.events[i].map}" alt="${data.events[i].location}" />
			<p><b>${data.events[i].location}</b> ${data.events[i].date}</p>
		</div>`;
	}

	// Update the page with the new content.
	document.getElementById('contet').innerHTML = newContent;

}