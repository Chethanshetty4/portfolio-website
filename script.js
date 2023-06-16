let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
	menu.classList.toggle('dummy');
	menulist.classList.toggle('open');
}
