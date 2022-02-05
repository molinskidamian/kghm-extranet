const userMenu = document.querySelector('.main-header--userMenu');
const subMenu = document.querySelector('.subMenu');

let isOpen = false;

userMenu.addEventListener('click', () => {
	console.log(`Current menu is: ${isOpen}`);
	if (isOpen === false) {
		isOpen = true;
		subMenu.style.opacity = 1;
	} else {
		isOpen = false;
		subMenu.style.opacity = 0;
	}
});
