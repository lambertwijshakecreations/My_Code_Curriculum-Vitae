const myEducation = () => {
	main.innerHTML = "";

	const educationContainer = document.createElement("div");
	educationContainer.className = "main__container--education";
	const newH1 = document.createElement("h1");
	const H1Title = document.createTextNode("Opleidingen");
	newH1.appendChild(H1Title);
	main.appendChild(newH1);

	educations.forEach((education) => {
		const newH3 = document.createElement("h3");
		newH3.innerText = education.Name;
		educationContainer.appendChild(newH3);
		const newH4 = document.createElement("h4");
		newH4.innerText = education.Location;
		educationContainer.appendChild(newH4);
		const newP = document.createElement("p");
		newP.innerText = education.Definition;
		educationContainer.appendChild(newP);
	});
	main.appendChild(educationContainer);
};

const educationButton = document
	.querySelector("#education")
	.addEventListener("click", () => {
		navigationToggle(), myEducation();
	});
