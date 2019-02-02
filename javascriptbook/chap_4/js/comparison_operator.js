var pass = 50;
var score = 90;

// check if the user has passed
var flag_pass = score >= pass;

var el_answer = document.getElementById('answer');
el_answer.innerHTML = 'Level passed: ' + flag_pass;