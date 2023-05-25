var btn = document.querySelector('button');
var menu = document.getElementById('nav');

function toggle_menu() {
	// body...
	if (menu.style.display == 'none') {
		menu.style.display = 'block';
	}
	else {
		menu.style.display = 'none';
	}
}