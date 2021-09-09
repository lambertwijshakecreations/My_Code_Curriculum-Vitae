//location of container
const main = document.querySelector("#mainContainer");

//navigatiebalk
toggleNavStatus = false;

const navigationToggle = () => {
	const getNavbar = document.querySelector(".nav__list");
	const getNavbarUl = document.querySelector("ul");
	const getLiLinks = document.querySelectorAll("li");
	if (toggleNavStatus === false) {
		getNavbarUl.style.visibility = "visible";
		getNavbar.style.width = "200px";
		const allLinks = getLiLinks.forEach((link) => (link.style.opacity = "1"));
		toggleNavStatus = true;
	} else if (toggleNavStatus === true) {
		getNavbarUl.style.visibility = "hidden";
		getNavbar.style.width = "-1px";
		const allLinks = getLiLinks.forEach((link) => (link.style.opacity = "0"));
		toggleNavStatus = false;
	}
};

//Buttons

// Hamburger Icon
const navigationButton = document
	.querySelector("#navigationButton")
	.addEventListener("click", () => navigationToggle());

//Home
const home = document.querySelector("#home").addEventListener("click", () => {
	window.location.reload(true);
});
