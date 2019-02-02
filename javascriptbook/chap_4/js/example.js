var table = 3;  // unit of table
var operator = 'addition';  // type of calculation
var i = 1;  // set counter to 1
var msg = '';  // init the msg variable

if (operator === 'addition') {
    while (i < 11) {
        msg += i + ' + ' + table + ' = ' + (i + table) + '<br>';
        i++;
    }
} else {  // do multiplication
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br>';
        i++;
    }
}

var el_blk = document.getElementById('blackboard');
el_blk.innerHTML = msg;