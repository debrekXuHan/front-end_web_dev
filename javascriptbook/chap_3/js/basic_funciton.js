// create a variable to hold a new message
var msg = 'Sign up to receive our newsletter for 10% off!';

function update_message() {
    var el_msg = document.getElementById('message');
    el_msg.textContent = msg;
}

// call the function
update_message();