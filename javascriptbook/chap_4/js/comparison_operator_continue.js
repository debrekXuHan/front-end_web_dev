// statement of variables
var score1 = 90;
var score2 = 95;
var high_score1 = 75;
var high_score2 = 95;

var flag_compare = (score1 + score2) > (high_score1 + high_score2);

var el_answer = document.getElementById('answer');
el_answer.innerHTML = 'New high score: ' + flag_compare;