var msg = '';
var level = 1;

// Determine message based on level
switch (level) {
    case 1:
        msg = 'Good luck on the first test';
        break;

    case 2:
        msg = 'Second of three - keep going!';
        break;

    case 3:
        msg = 'Final round, almost there!';
        break;

    default:
        msg = 'Good luck!';
        break;
}

var el_answer = document.getElementById('answer');
el_answer.innerHTML = msg;