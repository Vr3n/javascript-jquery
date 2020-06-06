if (window.sessionStorage) {
	let txtUsername = document.getElementById('username');
	let txtAnswer = document.getElementById('answer');

	sessionStorage.setItem('username', "Elliot");
	sessionStorage.setItem('answer', "A rat to destroy whiterose project!");

	txtUsername.value = sessionStorage.getItem('username');
	txtAnswer.value = sessionStorage.getItem('answer');

	txtUsername.addEventListener('input', function () {
		sessionStorage.setItem('username', txtUsername.value);
	});
	txtAnswer.addEventListener('input', function () {
		sessionStorage.setItem('answer', txtAnswer.value);
	});

}