var title = '';
var message = '';

title ="Molly's Special Offers";
message = '<a href=\"sale.html\">25% off!</a>';  // use \" in quotes

var el_title = document.getElementById('title');
el_title.textContent = title;
var el_note = document.getElementById('note');
el_note.innerHTML = message;