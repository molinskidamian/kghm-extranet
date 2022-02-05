(function () {
	const bars = document.querySelector('.main-navbar .fa-bars');
	const subMenu = document.querySelector('.main-navbar-subMenu');
	const memuItems = document.querySelectorAll('.main-navbar > ul > li > a');
	const icon = document.querySelector('ul.mobile-menu .menu');

	let isOpen = false;

	bars.addEventListener('click', () => {
		console.log('click-bars');
		if (isOpen === false) {
			isOpen = true;
			subMenu.classList.add('isOpen');
			icon.classList.remove('fa-bars');
			icon.classList.add('fa-times');
			icon.style.color = '#04ae8f';

			memuItems.forEach(el => {
				el.style.color = '#646464';
			});
		} else {
			isOpen = false;
			subMenu.classList.remove('isOpen');
			icon.classList.remove('fa-times');
			icon.classList.add('fa-bars');
			icon.style.color = '';
			memuItems.forEach(el => {
				el.style.color = '#fff';
			});
		}
	});
	icon.addEventListener('click', () => {
		console.log('icon');
	});
})();
