var el_username = document.getElementById('username');
var el_msg = document.getElementById('feedback');

function checkUsername(min_length) {
    if (el_username.value.length < min_length) {
        el_msg.textContent = 'Username must be ' + min_length + ' characters or more';
    } else {
        el_msg.textContent = '';
    }
}

if (el_username.addEventListener) {
    el_username.addEventListener('blur',
                                 function() {
                                     checkUsername(8);
                                 }, false);
} else {  // IE8 or earlier
    el_username.attachEvent('onblur',
                            function() {
                                checkUsername(8);
                            });
}
