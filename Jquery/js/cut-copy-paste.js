$(function() {
	let p = $('p:first');
	let clonedQuote = p.clone();
	p.remove();

	clonedQuote.insertAfter('h2');

	let moveItem = $('#one').detach();
	moveItem.appendTo('ul');

});