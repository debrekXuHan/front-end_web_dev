// select the first item
var first_item = document.getElementById('one');
first_item.className = 'complete';  // use className to change class attribute

var fourth_item = document.getElementsByTagName('li')[3];
fourth_item.setAttribute('class', 'cool');  // use setAttribute to change attribute value