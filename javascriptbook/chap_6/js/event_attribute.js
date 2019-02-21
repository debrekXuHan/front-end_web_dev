function checkUsername() {
    var el_msg = document.getElementById('feedback');
    var el_usename = document.getElementById('username');

    if (el_usename.value.length < 5) {
        el_msg.textContent = 'Username must be 5 characters or more';
    } else {
        el_msg.textContent = '';
    }
}