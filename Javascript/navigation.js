//navigatiebalk
toggleNavStatus = false;

const navigationToggle = () => {
	const getNavbar = document.querySelector(".nav__list");
	const getNavbarUl = document.querySelector("ul");
	const getLiLinks = document.querySelectorAll("li");
	if (toggleNavStatus === false) {
		getNavbarUl.style.visibility = "visible";
		getNavbar.style.width = "250px";
		const allLinks = getLiLinks.forEach((link) => (link.style.opacity = "1"));
		toggleNavStatus = true;
	} else if (toggleNavStatus === true) {
		getNavbarUl.style.visibility = "hidden";
		getNavbar.style.width = "0px";
		const allLinks = getLiLinks.forEach((link) => (link.style.opacity = "0"));
		toggleNavStatus = false;
	}
};

const navigationButton = document
	.querySelector("#navigationButton")
	.addEventListener("click", () => navigationToggle());
