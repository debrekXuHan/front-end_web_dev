var hot_items = document.querySelectorAll('li.hot');

// iteration all the elements in the Nodelist
if (hot_items.length > 0) {
    for (var i = 0; i < hot_items.length; i++) {
        hot_items[i].className = 'cool';
    }
}