var elements = document.getElementsByClassName('hot');  // find hot items

if (elements.length > 2) {  // if 3 or more are found
    var el = elements[1];
    el.className = 'cool';  // change the value of class name
}