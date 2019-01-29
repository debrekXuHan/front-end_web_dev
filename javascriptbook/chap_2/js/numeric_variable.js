// init three variables
var price = 0;
var quantity = 0;
var total = 0;

// assign values to variable
price = 5;
var el_img = document.getElementById('sign_img');  // getting element by searching id
quantity = el_img.alt.length;  // quantity is the length of the sign
total = price * quantity;

// change the element with an id of cost
var el_price = document.getElementById('cost');
el_price.textContent = '$' + total;