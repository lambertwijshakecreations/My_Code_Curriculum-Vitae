const mySkills = () => {
	main.innerHTML = "";

	const skillsContainer = document.createElement("div");
	trainingContainer.className = "skills";
	main.appendChild(skillsContainer);

	const newH1 = document.createElement("h1");
	const H1Title = document.createTextNode("Vaardigheden");
	newH1.appendChild(H1Title);
	skillsContainer.appendChild(newH1);
	// Display
	const newUl = document.createElement("ul");
	newUl.className = "skill-display";
	skillsContainer.appendChild(newUl);
	skills.forEach((skill) => {
		//List Item MS Office
		const newLi = document.createElement("li");
		newLi.id = skill.Id;
		newLi.className = skill.ClassName;
		console.log(newLi);
		const newLiDiv1 = document.createElement("div");
		newUl.appendChild(newLi);
		newLi.appendChild(newLiDiv1);
		// percentage circel
		const div1 = document.createElement("div");
		div1.className = "box-area";
		newLiDiv1.appendChild(div1);
		const div2 = document.createElement("div");
		div2.className = "box";
		div1.appendChild(div2);
		const div3 = document.createElement("div");
		div3.className = "round outer";
		div2.appendChild(div3);
		const div4 = document.createElement("div");
		div4.className = "inner-box";
		div3.appendChild(div4);
		const div5 = document.createElement("div");
		div5.className = "round";
		div2.appendChild(div5);
		const div6 = document.createElement("div");
		div6.className = "inner-box";
		div5.appendChild(div6);
		const div7 = document.createElement("div");
		div7.className = "number";
		div7.innerText = skill.Name;
		div2.appendChild(div7);
		const newP = document.createElement("p");
		newP.innerText = skill.Value;
		div7.append(newP);
	});
};

const skillsButton = document
	.querySelector("#skills")
	.addEventListener("click", () => {
		navigationToggle(), mySkills();
	});
