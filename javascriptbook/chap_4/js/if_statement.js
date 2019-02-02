var score = 80;
var score_pass = 50;

var msg ='';

if (score >= score_pass) {
    msg = 'Congratulations! ';
    msg += 'Proceed to the next round.';
} else {
    msg = 'Failed.<br>Please try again.';
}

var el_answer = document.getElementById('answer');
el_answer.innerHTML = msg;