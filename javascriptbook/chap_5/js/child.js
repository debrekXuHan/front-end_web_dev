// select the starting point and find its child node
var el_parent = document.getElementsByTagName('ul')[0];
var el_first_child = el_parent.firstChild;
var el_last_child = el_parent.lastChild;

// change the class attribute
el_first_child.setAttribute('class', 'complete');
el_last_child.setAttribute('class', 'cool');