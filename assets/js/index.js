const navbar = document.getElementById("navbar");
const navbarOffsetTop = navbar.offsetTop;

function Scroll() {
	if (window.pageYOffset >= navbarOffsetTop) {
		navbar.classList.add("fixed-top");
		navbar.classList.add("navbar-scrolled");

	} else {
		navbar.classList.remove("fixed-top");
		navbar.classList.remove("navbar-scrolled");
	}
}
window.addEventListener("scroll", Scroll);


	
