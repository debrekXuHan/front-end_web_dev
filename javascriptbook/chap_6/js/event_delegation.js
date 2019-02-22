// a function that return the target element
function getTarget(e) {
    if (!e) {
        e = window.event;
    }
    return (e.target || e.srcElement);
}

// a function that delete the selected item
function itemDone(e) {
    var target, elList, elListItem;
    target = getTarget(e);

    if (target.nodeName.toLowerCase() === 'em') {
        elListItem = target.parentNode.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }
    if (target.nodeName.toLowerCase() === 'a') {
        elListItem = target.parentNode;
        elList = elListItem.parentNode;
        elList.removeChild(elListItem);
    }

    // prevent the link from taking your elsewhere
    if (e.preventDefault) {
        e.preventDefault();
    } else {
        e.returnValue = false;
    }
}

// location the ul element by id
var el = document.getElementById('shoppingList');
if (el.addEventListener) {
    el.addEventListener('click',
                        function(e) {
                            itemDone(e);
                        }, false);
} else {
    el.attachEvent('onclick',
                   function(e) {
                       itemDone(e);
                   });
}