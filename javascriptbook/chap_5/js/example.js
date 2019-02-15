// select the parent node
var list = document.getElementsByTagName('ul')[0];

// add to the last position
var el_last = document.createElement('li');
var text = document.createTextNode('cream');
el_last.appendChild(text);
list.appendChild(el_last);

// add to the first position
var el_first = document.createElement('li');
text = document.createTextNode('kale');
el_first.appendChild(text);
var one_item = document.getElementById('one');
list.insertBefore(el_first, one_item);

var list_items = document.getElementsByTagName('li');
var item_length = list_items.length;
// change every li class to 'cool'
for (var i = 0; i < item_length; i++) {
    list_items[i].className = 'cool';
}

// change the heading
var heading = document.querySelector('h2');
heading.innerHTML = heading.textContent + '<span>' + item_length + '</span>';
// var heading_text = heading.firstChild.nodeValue;
// heading.innerHTML = heading_text + '<span>' + item_length + '</span>';