// create a variable that will be shown
var string = 'Home sweet home ';
var msg = '';

// calculate the length of a string
msg += '<h2>length</h2><p>' + string.length + '</p>';
// transform to uppercase
msg += '<h2>uppercase</h2><p>' + string.toUpperCase() + '</p>';
// transform to lowercase
msg += '<h2>lowercase</h2><p>' + string.toLowerCase() + '</p>';
// search by index
msg += '<h2>character index: 12</h2><p>' + string.charAt(12) + '</p>';
// search of the first index by keyword
msg += '<h2>first ee</h2><p>' + string.indexOf('ee') + '</p>';
// search of the last index by keyword
msg += '<h2>last e</h2><p>' + string.lastIndexOf('e') + '</p>';
// clip a part from the string by index
msg += '<h2>character index: 8-14</h2><p>' + string.substring(8, 14) + '</p>';
// replace some characters in a string (when appears at the first time)
msg += '<h2>replace</h2><p>' + string.replace('me', 'w') + '</p>';
// replace some characters in a string (replace all)
msg += '<h2>replace all</h2><p>' + string.replace(/me/g, 'w') + '</p>';


var el_info = document.getElementById('info');
el_info.innerHTML = msg;