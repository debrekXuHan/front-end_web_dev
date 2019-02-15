var first_item = document.getElementById('one');
var show_text = first_item.textContent;
var show_inner = first_item.innerText;

// Show the content of these two properties
var msg = '<p>textContent: ' + show_text + '</p>';
    msg += '<p>innerText: ' + show_inner + '</p>';
var el = document.getElementById('scriptResults');
el.innerHTML = msg;

first_item.textContent = 'sourdough bread';