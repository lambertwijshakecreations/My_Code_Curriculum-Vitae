const myHobbies = () => {
	console.log("Hobbies");
};

const hobbyButton = document
	.querySelector("#hobby")
	.addEventListener("click", () => {
		navigationToggle(), myHobbies();
	});
