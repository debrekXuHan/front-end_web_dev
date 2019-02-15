// create a new li element with textNode
var new_el = document.createElement('li');
var new_text = document.createTextNode('quinoa');
new_el.appendChild(new_text);

// add it into a ul element
var pos = document.getElementsByTagName('ul')[0];
pos.appendChild(new_el);