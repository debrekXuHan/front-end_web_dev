function checkUsername() {
    var el_msg = document.getElementById('feedback');
    if (this.value.length < 5) {
        el_msg.textContent = 'Username must be 5 characters or more';
    } else {
        el_msg.textContent = '';
    }
}

var el_username = document.getElementById('username');
// add an event listener here
el_username.addEventListener('blur', checkUsername, false);