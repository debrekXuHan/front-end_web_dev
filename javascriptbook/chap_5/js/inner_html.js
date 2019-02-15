var first_item = document.getElementById('one');
var item_content = first_item.innerHTML;

first_item.innerHTML = '<a herf=\"http://example.org\">' + item_content + '</a>';