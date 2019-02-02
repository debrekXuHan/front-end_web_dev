var score1 = 8;
var score2 = 8;
var score1_pass = 6;  // score1 pass mark
var score2_pass = 6;  // score2 pass mark

var flag_pass = (score1 >= score1_pass) && (score2 >= score2_pass);

var msg = 'Both rounds passed: ' + flag_pass;

var el_answer = document.getElementById('answer');
el_answer.innerHTML = msg;