const main = document.querySelector("#mainContainer");

const myWorkExperience = () => {
	main.innerHTML = "";
	//Header
	const newH1 = document.createElement("h1");
	newH1.innerText = "Werkervaring";
	main.appendChild(newH1);

	//Container1 Bureau Techniek
	const newH3Con1 = document.createElement("h3");
	newH3Con1.innerText = "Procesoperator";
	main.appendChild(newH3Con1);
	const newH4Con1 = document.createElement("h4");
	newH4Con1.innerText = "Uitzendwerk via Bureau Techniek | 2020 - 2021";
	main.appendChild(newH4Con1);
	const newUlCon1 = document.createElement("ul");
	const newLi1Con1 = document.createElement("li");
	newLi1Con1.innerText =
		"Als procesoperator werkzaam geweest bij Bergschenhoek Luchtcomfort in Staphorst";
	newUlCon1.appendChild(newLi1Con1);
	const newLi2Con1 = document.createElement("li");
	newLi2Con1.innerText =
		"Werkzaam als Lasrobot Operator bij Jan Kuipers in Nunspeet";
	newUlCon1.appendChild(newLi2Con1);
	main.appendChild(newUlCon1);

	//Container2 Everbake Group
	const newH3Con2 = document.createElement("h3");
	newH3Con2.innerText = "Procesoperator";
	main.appendChild(newH3Con2);
	const newH4Con2 = document.createElement("h4");
	newH4Con2.innerText = "Everbake Group B.V. | 2006 - 2020";
	main.appendChild(newH4Con2);
	const newUlCon2 = document.createElement("ul");
	const newLi1Con2 = document.createElement("li");
	newLi1Con2.innerText =
		"Het instellen en programeren van besturingsprogramma's van ABB-robotarmen.";
	newUlCon2.appendChild(newLi1Con2);
	const newLi2Con2 = document.createElement("li");
	newLi2Con2.innerText =
		"Het onderhouden van deze robotics en machines eromheen.";
	newUlCon2.appendChild(newLi2Con2);
	const newLi3Con2 = document.createElement("li");
	newLi3Con2.innerText =
		"Verantwoordelijk voor het verwerken van orders op de bandlasmachine. Deze machine maakt door middel van weerstand-lasmachines en lasrobots transportbanden die met name in grote bakkerijen worden gebruikt.";
	newUlCon2.appendChild(newLi3Con2);
	const newLi4Con2 = document.createElement("li");
	newLi4Con2.innerText = "Magazijnbeheer voor eigen voorraad.";
	newUlCon2.appendChild(newLi4Con2);
	const newLi5Con2 = document.createElement("li");
	newLi5Con2.innerText =
		"De afwerking van producten door middel van lassen, slijpen, ponsen en plaatwerk.";
	newUlCon2.appendChild(newLi5Con2);
	main.appendChild(newUlCon2);
};

const experienceButton = document
	.querySelector("#experience")
	.addEventListener("click", () => {
		navigationToggle(), myWorkExperience();
	});
