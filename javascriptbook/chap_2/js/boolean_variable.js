// init variables as TRUE
var in_stock = true;
var shipping = true;

in_stock = true;
shipping = false;

// change the value of "class" attribute
var el_stock = document.getElementById('stock');
el_stock.className = in_stock;
var el_shipping = document.getElementById('shipping');
el_shipping.className = shipping;