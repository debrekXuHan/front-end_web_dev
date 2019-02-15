var item = document.getElementById('one');

if (item.hasAttribute('class')) {
    var attr = item.getAttribute('class');
    var el = document.getElementById('scriptResults');
    el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';
}