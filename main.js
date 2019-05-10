const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => {
	container.classList.add('hover-left');
});

left.addEventListener('mouseeleave', () => {
	container.classList.remove('hover-left');
});

right.addEventListener('mouseeleave', () => {
	container.classList.add('hover-right');
});

right.addEventListener('mouseeleave', () => {
	container.classList.remove('hover-right');
});