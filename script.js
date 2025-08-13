const drawingPad = document.querySelector(".container");
const gridSize = 16;

for (let i=0; i<(gridSize**2); i++) {
  const drawingCell = document.createElement('div');
  drawingPad.appendChild(drawingCell);
  drawingCell.classList.add('cell');
  drawingCell.id=i;
  let cellWidth = (960/gridSize)+'px';
  drawingCell.style.width = cellWidth;
}

const modrawingCells = document.querySelectorAll(".cell");

modrawingCells.forEach(item => item.addEventListener("mouseover", () => colorCell(item)));

function colorCell(item) {
  let element = document.getElementById(item.id);
  element.style.backgroundColor = 'black';
}


