function checkUsername() {
    var username = el.value;
    if (username.length < 5) {
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet...';
    } else {
        elMsg.textContent = '';
    }
}

function tipUsername() {
    elMsg.className = 'tip';
    elMsg.textContent = 'Username must be at least 5 characters';
}

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');
// call different functions for different events
el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);