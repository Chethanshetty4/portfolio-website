let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.addEventListener('click', ()=>{
	menulist.classList.toggle('open');
})
