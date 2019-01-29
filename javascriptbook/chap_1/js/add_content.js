// Javascript for adding content example
// Showing different greeting words according to different time.
var today = new Date();
console.log(today);
var hour_now = today.getHours();
var greeting = 'Welcome!'; // init this variable

if (hour_now > 18) {
    greeting = 'Good evening!';
} else if (hour_now > 12) {
    greeting = 'Good afternoon!';
} else if (hour_now > 0) {
    greeting = 'Good morning!';
}

document.write('<h3>' + greeting + '</h3>');