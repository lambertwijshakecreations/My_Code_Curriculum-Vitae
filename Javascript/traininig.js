const myTraining = () => {
	main.innerHTML = "";

	const trainingContainer = document.createElement("div");
	trainingContainer.className = "main__container--training";

	const newH1 = document.createElement("h1");
	const H1Title = document.createTextNode("Cursussen & Trainingen");
	newH1.appendChild(H1Title);
	main.appendChild(newH1);

	trainings.forEach((training) => {
		const newDiv = document.createElement("div");
		newDiv.className = "training-object";
		const newH3 = document.createElement("h3");
		newH3.innerText = training.Name;
		trainingContainer.appendChild(newH3);
		const newH4 = document.createElement("h4");
		newH4.innerText = training.Location;
		const newH5 = document.createElement("h5");
		newH5.innerText = `Geldig tot: ${training.valid}`;
		newDiv.appendChild(newH5);
		newDiv.appendChild(newH4);
		trainingContainer.appendChild(newDiv);
	});
	main.appendChild(trainingContainer);
};

const trainingButton = document
	.querySelector("#training")
	.addEventListener("click", () => {
		navigationToggle(), myTraining();
	});
