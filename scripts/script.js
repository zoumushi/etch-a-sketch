const container = document.getElementById("container");
const button = document.getElementById("grid-button");

function changeGridColor(event) {
	if (event.target.className === "column") {
		event.target.style[`background-color`] = "black";
	}
}

function createGrid(size) {
	container.innerHTML = '';
	for (i = 0; i < size; i++) {
		const row = document.createElement("div");
		row.setAttribute("class", "row");
		for (j = 0; j < size; j++) {
			const column = document.createElement("div");
			column.setAttribute("class", "column");
			row.appendChild(column);
		}
		container.appendChild(row);
	}
}

function promptUser() {
	let userNumber;
	do {
		userNumber = Number(prompt("enter number from 1 to 100"));
	} while (userNumber > 100);
	if (typeof userNumber === "number" && userNumber > 0) {
		createGrid(userNumber)
	}
}

createGrid(16);

container.addEventListener("mouseover", changeGridColor);
button.addEventListener("click", promptUser)