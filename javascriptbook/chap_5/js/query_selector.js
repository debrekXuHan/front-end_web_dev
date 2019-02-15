// querySelector returns the first match
var el = document.querySelector('li.hot');
el.className = 'cool';

// querySelectorAll returns a Nodelist
var els = document.querySelectorAll('li.hot');
els[1].className = 'cool';