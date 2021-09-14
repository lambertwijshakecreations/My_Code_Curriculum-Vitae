const myCodes = () => {
	main.innerHTML = "";

	const codeContainer = document.createElement("div");
	codeContainer.className = "main__container--codes";
	const newH1 = document.createElement("h1");
	const H1Title = document.createTextNode("Codes");
	newH1.appendChild(H1Title);
	main.appendChild(newH1);

	const newCodeP = document.createElement("p");
	newCodeP.innerText =
		"Hier een paar voorbeelden van codes die ik geschreven heb. De meeste codes zijn van eindopdrachten die ik moest maken voor de opleiding Front-end Develover. voor het uiterlijk verwijs ik u naar de link van Netlify voor de code naar de link van Github.";
	main.appendChild(newCodeP);

	codes.forEach((code) => {
		const newDiv = document.createElement("div");
		newDiv.className = "code-object";
		codeContainer.appendChild(newDiv);
		const newH3 = document.createElement("h3");
		newH3.innerText = code.Name;
		newDiv.appendChild(newH3);
		const newType = document.createElement("h5");
		newType.innerText = `Programmeertalen: ${code.Type}`;
		newDiv.appendChild(newType);
		const newP = document.createElement("p");
		newP.innerText = code.Description;
		newDiv.appendChild(newP);
		const newH5 = document.createElement("h5");
		newH5.innerText = `Beeldformaat: ${code.Display}`;
		newDiv.appendChild(newH5);
		const newA1 = document.createElement("a");
		newA1.href = code.Netlify;
		newA1.innerText = "Netlify";
		newA1.target = "__blank";
		newDiv.appendChild(newA1);
		const newA2 = document.createElement("a");
		newA2.href = code.Github;
		newA2.innerText = "Github";
		newA2.target = "__blank";
		newDiv.appendChild(newA2);
	});
	main.appendChild(codeContainer);
};

const codesButton = document
	.querySelector("#codes")
	.addEventListener("click", () => {
		navigationToggle(), myCodes();
	});
