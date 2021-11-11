//^ Navbar
const nav = document.querySelector('.nav');

//* hide navbar on page scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	let currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		nav.style.top = '0';
	} else {
		nav.style.top = '-60px';
	}
	prevScrollpos = currentScrollPos;

	if (window.screen.width <= '500px') {
		nav.style.top = '0';
	}
};

//* mobile nav
const navSlide = () => {
	const navList = document.querySelector('.nav-list');
	const navItem = document.querySelectorAll('.nav-list li');
	const burger = document.querySelector('.burger');

	burger.addEventListener('click', () => {
		console.log('clicked');
		navList.classList.toggle('open');
		burger.classList.toggle('toggle');
	});
	//close navbar when clicking on nav-iink
	for (let i = 0; i < navItem.length; i++) {
		let closeNav = navItem[i];
		closeNav.addEventListener('click', () => {
			navList.classList.toggle('open');
			burger.classList.toggle('toggle');
		});
	}
};

navSlide();

//! SET BODY POSITION TO FIXED WHEN MOBILE NAV IS OPEN TO DISABLE SCROLLING

//^ Hero typewriter
// const textEl = document.querySelector('.text');
// let textArr = [
// 	'Dreams',
// 	'Success',
// 	'Passion',
// 	'Transformation',
// 	'Dedication',
// 	'Positivity',
// ];
// let length;
// let inx = 0;
// let count = 0;
// let letter = '';
// let currentText = '';

// window.addEventListener('DOMContentLoaded', function () {
// 	type();
// });
// function type() {
// 	let timeout = 1000;
// 	for (let i = 0; i < textArr.length; i++) {
// 		length = textArr[i].length;
// 		letter = '';
// 		for (let j = 0; j < length; j++) {
// 			letter += textArr[i].charAt(j);
// 			timeout += 800;
// 			((timeout, letter, restart) => {
// 				setTimeout(() => {
// 					textEl.innerHTML = letter;
// 					console.log(letter);
// 					if (restart) type();
// 				}, timeout);
// 			})(timeout, letter, i === textArr.length - 1 && j === length - 1);
// 		}
// 	}
// }

const textEl = document.querySelector('.text');
const textArr = [
	'Websites',
	'Web Applications',
	'Content',
	'Socials Management',
	'Marketing Strategies',
	'Transformation',
];
const speed = 130;
const pause = 1000;

function typeWriter(i = 0, index = 1, direction = 1) {
	let displayed = textArr[i].slice(0, index);
	textEl.innerHTML = displayed;

	if (displayed.length >= textArr[i].length) {
		setTimeout(() => typeWriter(i, index - 1, -1), pause);
	} else if (displayed.length === 0) {
		setTimeout(() => typeWriter((i + 1) % textArr.length), pause);
	} else {
		setTimeout(() => typeWriter(i, index + direction, direction), speed);
	}
}
typeWriter();

//^ Blog
function readMore(date) {
	const dots = document.querySelector(`.blog[data-date="${date}"] .dots`);
	const moreText = document.querySelector(`.blog[data-date="${date}"] .more`);
	const readBtn = document.querySelector(`.blog[data-date="${date}"] .readBtn`);

	readBtn.addEventListener('click', () => {
		if (dots.style.display === 'none') {
			dots.style.display = 'inline';
			moreText.style.display = 'none';
			readBtn.innerHTML = 'Read More';
		} else {
			dots.style.display = 'none';
			moreText.style.display = 'inline';
			readBtn.innerHTML = 'Read Less';
		}
	});
}

readMore('jan');
readMore('feb');
readMore('mar');
