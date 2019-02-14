var elements = document.getElementsByTagName('li');  // find li items

if (elements.length > 0) {  // if 3 or more are found
    var el = elements[0];
    el.className = 'cool';  // change the value of class name
}