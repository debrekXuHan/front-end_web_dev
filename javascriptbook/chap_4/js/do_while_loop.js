var i = 1;
var msg = '';

// do-while loop
do {
    msg += i + ' x 5 = ' + (i * 5) + '<br>';
    i++;
} while (i < 3);

var el_answer = document.getElementById('answer');
el_answer.innerHTML = msg;