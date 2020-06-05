let xhr = new XMLHttpRequest();  // Create XMLHttpRequest Object.


// Conditional check if server status was ok.
xhr.onload = function () {
	if (xhr.status === 200) {

		// Processing the XML.
		let response = xhr.responseXML;	// Get xml from server.
		let events = response.getElementsByTagName('event'); // find <Event> elements.

		// Loop through event elements.
		for (let i = 0; i < events.length; i++) {
			let container, image, location, city, newline;

			container = document.createElement('div');	// create div container.
			container.className = 'event';		/* Add class Attribute */

			image = document.createElement('img');
			image.setAttribute('src', getNodeValue(events[i], 'map'));
			image.appendChild(document.createTextNode(getNodeValue(events[i], 'map')));
			container.appendChild(image);


			// Add location data.
			location = document.createElement('p');
			city = document.createElement('b');
			newline = document.createElement('br');

			city.appendChild(document.createTextNode(getNodeValue(events[i]), 'location'));
			location.appendChild(newline);
			location.insertBefore(city, newline);
			location.appendChild(document.createTextNode(getNodeValue(events[i], 'date')));
			container.appendChild(location);

			document.getElementById('content').appendChild(container);
		}
		function getNodeValue(obj, tag) {
			return obj.getElementsByTagName(tag)[0].firstChild.nodeValue;
		}
	}
};
xhr.open('GET', 'data/data.xml', true);
xhr.send();