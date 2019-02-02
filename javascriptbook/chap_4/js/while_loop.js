var i = 1;
var msg = '';

// while loop
while (i < 10) {
    msg += i + ' x 5 = ' + (i * 5) + '<br>';
    i++;
}

var el_answer = document.getElementById('answer');
el_answer.innerHTML = msg;