const myWorkExperience = () => {
	main.innerHTML = "";
	const experienceContainer = document.createElement("div");
	experienceContainer.className = "main__container--experience";
	//Header
	const newH1 = document.createElement("h1");
	newH1.innerText = "Werkervaring";
	experienceContainer.appendChild(newH1);

	//Container1 Arbeidsmakelaar Van der Steege
	const newH3Con1 = document.createElement("h3");
	newH3Con1.innerText = "Procesoperator/CNC Glasverspanner";
	experienceContainer.appendChild(newH3Con1);
	const newH4Con1 = document.createElement("h4");
	newH4Con1.innerText = "Werk via Arbeidmakelaar van der Steege | 2021 - Heden";
	experienceContainer.appendChild(newH4Con1);
	const newUlCon1 = document.createElement("ul");
	const newLi1Con1 = document.createElement("li");
	newLi1Con1.innerText =
		"Met AutoCAD pas ik tekeningen aan zodat ze door de CNC machiene gelezen kunnen worden";
	newUlCon1.appendChild(newLi1Con1);
	const newLi2Con1 = document.createElement("li");
	newLi2Con1.innerText = "instellen van de CNC machines";
	newUlCon1.appendChild(newLi2Con1);
	const newLi3Con1 = document.createElement("li");
	newLi3Con1.innerText = "Meehelpen in de productie";
	newUlCon1.appendChild(newLi3Con1);
	experienceContainer.appendChild(newUlCon1);

	//Container2 Bureau Techniek
	const newH3Con2 = document.createElement("h3");
	newH3Con2.innerText = "Procesoperator";
	experienceContainer.appendChild(newH3Con2);
	const newH4Con2 = document.createElement("h4");
	newH4Con2.innerText = "Uitzendwerk via Bureau Techniek | 2020 - 2021";
	experienceContainer.appendChild(newH4Con2);
	const newUlCon2 = document.createElement("ul");
	const newLi1Con2 = document.createElement("li");
	newLi1Con2.innerText =
		"Als procesoperator werkzaam geweest bij Bergschenhoek Luchtcomfort in Staphorst";
	newUlCon2.appendChild(newLi1Con2);
	const newLi2Con2 = document.createElement("li");
	newLi2Con2.innerText =
		"Werkzaam als Lasrobot Operator bij Jan Kuipers in Nunspeet";
	newUlCon2.appendChild(newLi2Con2);
	experienceContainer.appendChild(newUlCon2);

	//Container3 Everbake Group
	const newH3Con3 = document.createElement("h3");
	newH3Con3.innerText = "Procesoperator";
	experienceContainer.appendChild(newH3Con3);
	const newH4Con3 = document.createElement("h4");
	newH4Con3.innerText = "Everbake Group B.V. | 2006 - 2020";
	experienceContainer.appendChild(newH4Con3);
	const newUlCon3 = document.createElement("ul");
	const newLi1Con3 = document.createElement("li");
	newLi1Con3.innerText =
		"Het instellen en programeren van besturingsprogramma's van ABB-robotarmen.";
	newUlCon3.appendChild(newLi1Con3);
	const newLi2Con3 = document.createElement("li");
	newLi2Con3.innerText =
		"Het onderhouden van deze robotics en machines eromheen.";
	newUlCon3.appendChild(newLi2Con3);
	const newLi3Con3 = document.createElement("li");
	newLi3Con3.innerText =
		"Verantwoordelijk voor het verwerken van orders op de bandlasmachine. Deze machine maakt door middel van weerstand-lasmachines en lasrobots transportbanden die met name in grote bakkerijen worden gebruikt.";
	newUlCon3.appendChild(newLi3Con3);
	const newLi4Con3 = document.createElement("li");
	newLi4Con3.innerText = "Magazijnbeheer voor eigen voorraad.";
	newUlCon3.appendChild(newLi4Con3);
	const newLi5Con3 = document.createElement("li");
	newLi5Con3.innerText =
		"De afwerking van producten door middel van lassen, slijpen, ponsen en plaatwerk.";
	newUlCon3.appendChild(newLi5Con3);
	experienceContainer.appendChild(newUlCon3);
	main.appendChild(experienceContainer);
};

const experienceButton = document
	.querySelector("#experience")
	.addEventListener("click", () => {
		navigationToggle(), myWorkExperience();
	});
