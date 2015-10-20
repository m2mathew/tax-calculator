/*
 *  Tax Calculator
 *
 *	#14 from the book "Exercises for Programmers"
 *
 */

'use strict';

import $ from 'jquery';

$(document).ready(function() {

	let amount, state, tax, total, newTax = null;

	let $amount = $('#amount');
	let $state = $('#state');
	let $button = $('button');
	let $subtotal = $('#subtotal');
	let $tax = $('#tax');
	let $total = $('#total');

	$('form').on('submit', function(e) {
		e.preventDefault();

		amount = $amount.val();
		state = $state.val().toUpperCase();

		tax = 5.5;
		newTax = ((tax/100) * amount);
		let newTax = parseFloat(newTax);

		let total = parseFloat(amount);

		$total.text('Total due: $' + amount);
		$subtotal.text('');
		$tax.text('');

		if (state === 'WI') {
			total = total + newTax;

			$subtotal.text('Original Amount: $' + amount);
			$tax.text('Tax rate: ' + tax + '%');
			$total.text('Total due: $' + total.toFixed(2));
		}
	});
});
