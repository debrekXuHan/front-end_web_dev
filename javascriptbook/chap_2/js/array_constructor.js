// init an array variable by constructor
var colors = new Array('white',
                       'black',
                       'custom');
console.log("number of color array: ", colors.length);

var el_color = document.getElementById('colors');
el_color.textContent = colors[0];