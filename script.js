const container = document.querySelector(".container");
const changeGridSizeBtn = document.querySelector(".change-grid-size");
const rainbowBtn = document.querySelector(".rainbow");
const darkenBtn = document.querySelector(".darken");
let pencilColor = "rgb(0, 0, 0)";
let bgColor = "rgb(255, 255, 255)";
let mode = "normal";
let totalGridCells = 256;
let numberOfCellsPerSide = 16;

function setGridData() {
  userInput = +prompt("Enter New Grid Size");
  if (isNaN(userInput) || userInput > 100 || userInput < 1) {
    alert("Please enter a valid number from 1 to 100");
  } else {
    numberOfCellsPerSide = userInput;
    totalGridCells = userInput * userInput;
  }
}

function drawGrid() {
  container.innerHTML = "";
  for (let i = 0; i < totalGridCells; i++) {
    let dimensions = 840 / numberOfCellsPerSide + "px";
    let cell = document.createElement("div");
    cell.style.width = dimensions;
    cell.style.height = dimensions;
    cell.style.border = "1px solid black";
    cell.style.backgroundColor = bgColor;
    cell.style.opacity = "1.0";
    container.appendChild(cell);
  }
}

function rainbow() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function darkens(e) {
  if (e.target.getAttribute("class") !== "container") {
    let currentOpacity = e.target.style.opacity;
    e.target.style.opacity = `${currentOpacity - 0.1}`;
  }
}

container.addEventListener("mouseover", (e) => {
  switch (mode) {
    case "normal":
      e.target.style.backgroundColor = pencilColor;
      break;
    case "rainbow":
      e.target.style.backgroundColor = rainbow();
      e.target.style.opacity = "1.0";
      break;
    case "darken":
      darkens(e);
      break;
  }
});

changeGridSizeBtn.addEventListener("click", () => {
  setGridData();
  drawGrid();
});

rainbowBtn.addEventListener("click", () => {
  mode = "rainbow";
});

darkenBtn.addEventListener("click", () => {
  mode = "darken";
});

drawGrid();
