var date = new Date();
var footer_info = '';
footer_info = '<p>Copyright &copy;' + date.getFullYear() + '</p>';

var el_footer = document.getElementById('footer');
el_footer.innerHTML = footer_info;