// create a random integer number ranging from 1 to 10
var random_num = Math.floor(Math.random() * 10 + 1);

var el_info = document.getElementById('info');
el_info.innerHTML = '<h2>random number</h2><p>' + random_num + '</p>';