// Create a variable to hold a message that will be shown on the page
var msg = '<p><b>page title: </b>' + document.title + '</br>';
msg += '<b>page address: </b>'+ document.URL + '</br>';
msg += '<b>last modified: </b>' + document.lastModified + '</p>';

var el_footer = document.getElementById('footer');
el_footer.innerHTML = msg;