function checkUsername(e, min_length) {
    var el, el_msg;
    if (!e) {
        e = window.event;
    }
    el = e.target || e.srcElement;
    el_msg = el.nextSibling;

    if (el.value.length < min_length) {
        el_msg.textContent = 'Username must be ' + min_length + ' characters or more';
    } else {
        el_msg.textContent = '';
    }
}

var el_username = document.getElementById('username');
if (el_username.addEventListener) {
    el_username.addEventListener('blur',
                                 function(e) {
                                     checkUsername(e, 8);
                                 }, false);
} else {  // IE8 or earlier
    el_username.attachEvent('onblur',
                            function(e) {
                                checkUsername(e, 8);
                            });
}
