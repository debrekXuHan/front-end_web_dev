// variable for welcome message
var greeting = 'Howdy ';
var name = 'Molly';
var message = ', please check your order:';

var welcome_msg = greeting + name + message;
var el_greeting = document.getElementById('greeting');
el_greeting.textContent = welcome_msg;

// fill in the sign name and calculate the price
var sign = 'Montague House';
var tiles = sign.length;
var subtotal = 5 * tiles;
var shipping = 7;
var total = subtotal + shipping;

var el_sign = document.getElementById('userSign');
el_sign.textContent = sign;
var el_tiles = document.getElementById('tiles');
el_tiles.textContent = tiles;

var el_subtotal = document.getElementById('subTotal');
el_subtotal.textContent = '$' + subtotal;
var el_shipping = document.getElementById('shipping');
el_shipping.textContent = '$' + shipping;
var el_total = document.getElementById('grandTotal');
el_total.textContent = '$' + total;