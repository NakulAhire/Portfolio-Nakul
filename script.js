// Smooth Scrolling
$('nav a').on('click', function(event) {
	if (this.hash !== '') {
		event.preventDefault();

		const hash = this.hash;

		$('html, body').animate(
			{
				scrollTop: $(hash).offset().top
			},
			800,
			function() {
				window.location.hash = hash;
			}
		);
	}
});

// Toggle Navigation Menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
	document.body.classList.toggle('nav-open');

	// Scroll to Top
	if (document.body.classList.contains('nav-open')) {
		$('html, body').animate(
			{
				scrollTop: 20
			},
			800
		);
	}
});

navLinks.forEach(link => {
	link.addEventListener('click', () => {
		document.body.classList.remove('nav-open');
	});
});