//create the original number
var num = 10.23456;

// transform the number
var msg = '';
msg += '<h2>original number</h2><p>' + num + '</p>';
// round the number to 3 decimal places
msg += '<h2>3 decimal place</h2><p>' + num.toFixed(3) + '</p>';
// round the number to 3 digits
msg += '<h2>3 digits</h2><p>' + num.toPrecision(3) + '</p>';

var el_info = document.getElementById('info');
el_info.innerHTML = msg;