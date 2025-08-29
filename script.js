const drawingPad = document.querySelector(".container");
let gridSize = 16;

const btnGridSize = document.querySelector(".gridSize");
btnGridSize.addEventListener("click", ()=> getUserInput());

const btnGridClear = document.querySelector(".gridClear");
btnGridClear.addEventListener("click", ()=> clearGrid())

function createPad(){
  for (let i=0; i<(gridSize**2); i++) {
    const drawingCell = document.createElement('div');
    drawingPad.appendChild(drawingCell);
    drawingCell.classList.add('cell');
    drawingCell.id=i;
    let cellWidth = (960/gridSize)+'px';
    drawingCell.style.width = cellWidth;

    let modrawingCells = document.querySelectorAll(".cell");

    modrawingCells.forEach(item => item.addEventListener("mouseover", () => colorCell(item)));
  }
}

function colorCell(item) {
  let element = document.getElementById(item.id);

  if (element.style.backgroundColor == '') {
    element.style.backgroundColor = generateRandomRgbColor();
 }
}

function getUserInput() {
  clearGrid();
  
  const userInput = prompt('Please enter a grid size between 1 and 100:', '16')

  if (userInput == null) {
    //Do nothing, the user entered "Cancel"
  } else if (Math.floor(userInput) > 0 && Math.floor(userInput) < 101) {
    gridSize = userInput;
    createPad();
  } else {
    alert('Please review and try again. Or not. Up to you.')
  }
}

function clearGrid() {
  let modrawingCell = document.querySelectorAll(".cell");
  modrawingCell.forEach(item => item.remove());
}

function generateRandomRgbColor() {
  // Generate random numbers for red, green, and blue components
  const r = Math.floor(Math.random() * 256); // 0-255
  const g = Math.floor(Math.random() * 256); // 0-255
  const b = Math.floor(Math.random() * 256); // 0-255

  return `rgb(${r},${g},${b})`;
}

