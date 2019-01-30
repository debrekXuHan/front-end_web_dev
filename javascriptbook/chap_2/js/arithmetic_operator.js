// use arithmetic operators to calculate the value for variables
var subtotal = (13 + 1) * 5;  // should be 70
var el_subtotal = document.getElementById('subtotal');
el_subtotal.textContent = subtotal;

var shipping = (13 + 1) * 0.5;  // should be 7
var el_shipping = document.getElementById('shipping');
el_shipping.textContent = shipping;

var total = subtotal + shipping;  // should be 77
var el_total = document.getElementById('total');
el_total.textContent = total;