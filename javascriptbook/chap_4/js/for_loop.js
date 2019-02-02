var scores = [24, 32, 17];
var len = scores.length;
var msg = '';

// for loop
for (var i = 0; i < len; i++) {
    var round_num = i + 1;
    msg += 'Round ' + round_num + ': ';
    msg += scores[i];
    msg += '<br>';
}

var el_answer = document.getElementById('answer');
el_answer.innerHTML = msg;