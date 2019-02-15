// locate the element that will be removed
var remove_el = document.getElementById('four');

// locate its container
var container_el = remove_el.parentNode;

// remove the node
container_el.removeChild(remove_el);