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

	// use an if statement, not an else statement

	// round money up to nearest cent

	// use a simple output statement at the end to display results

	let $amount = $('#amount');
	let $state = $('#state');
	let $button = $('button');
	let $subtotal = $('#subtotal');
	let $tax = $('#tax');
	let $total = $('#total');

	$button.on('click', function(e) {
		e.preventDefault();

		amount = $amount.val();
		state = $state.val().toUpperCase();

		tax = 5.5;
		newTax = ((tax/100) * amount);
		let newTax = parseFloat(newTax);

		let total = parseFloat(amount);

		if (state === 'WI') {
			total = total + newTax;

			$subtotal.text('Original Amount: $' + amount);
			$tax.text('Tax rate: ' + tax + '%');
			$total.text('Total due: $' + total.toFixed(2));
		}

		if (state !== 'WI') {
			$total.text('Total due: $' + amount);
		}

	});
});
