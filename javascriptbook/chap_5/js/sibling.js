// select the starting point
var start_item = document.getElementById('two');
var prev_item = start_item.previousSibling;
var next_item = start_item.nextSibling;

prev_item.className = 'complete';
next_item.className = 'cool';