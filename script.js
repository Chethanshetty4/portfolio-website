let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.addEventListener('click', ()=>{
	menu.classList.toggle('dummycode');
	menulist.classList.toggle('open');
})
