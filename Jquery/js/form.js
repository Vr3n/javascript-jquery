$(function () {
	let newItemButton = $("#newItemButton");
	let newItemForm = $("#newItemForm");
	let textInput = $('input:text');


	newItemButton.show();
	newItemForm.hide();

	$('#showForm').on('click', function () {
		newItemButton.hide();
		newItemForm.show();
	});

	$('#showForm').on('click', function () {
		newItemButton.hide();
		newItemForm.show();
	});


	newItemForm.on('submit', function(e) {
		e.preventDefault();
		let newText = $('input:text').val();
		$('li:last').after(`<li>${newText}</li>`);
		newItemForm.hide();
		newItemButton.show();
		textInput.val('');
	});

	$('body').on('keypress', function(e) {
		console.log(e.key);
	});
});