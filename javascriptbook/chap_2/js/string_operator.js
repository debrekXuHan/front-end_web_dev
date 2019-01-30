// show adding string variables here
var greeting = 'Howdy ';
var name = 'Molly';
var welcome_msg = greeting + name + '!';

var el_greeting = document.getElementById('greeting');
el_greeting.textContent = welcome_msg;