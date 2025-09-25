const container = document.querySelector(".container");
const changeGridSizeBtn = document.querySelector(".change-grid-size");
let totalGridCells = 256;
let numberOfCellsPerSide = 16;

function drawGrid() {
  container.innerHTML = "";
  for (let i = 0; i < totalGridCells; i++) {
    let dimensions = 840 / numberOfCellsPerSide + "px";
    let cell = document.createElement("div");
    cell.style.width = dimensions;
    cell.style.height = dimensions;
    cell.style.border = "1px solid black";
    cell.style.backgroundColor = "white";
    container.appendChild(cell);
  }
}

function setGridData() {
  userInput = +prompt("Enter New Grid Size");
  if (isNaN(userInput) || userInput > 100 || userInput < 1) {
    alert("Please enter a valid number from 1 to 100");
  } else {
    numberOfCellsPerSide = userInput;
    totalGridCells = userInput * userInput;
  }
}

container.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "black";
});

changeGridSizeBtn.addEventListener("click", () => {
  setGridData();
  drawGrid();
});

drawGrid();
