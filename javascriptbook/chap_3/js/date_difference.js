// today date and est. date
var today = new Date();
var est = new Date('Apr 16, 1996 15:45:55');

// calculate year difference by millisecond
// 1 year = 31556900000 ms
var diff = today.getTime() - est.getTime();
diff = Math.floor(diff / 31556900000);

var msg = '';
msg = diff + ' years of online travel advice';

var el_msg = document.getElementById('message');
el_msg.textContent = msg;