const drawingPad = document.querySelector(".container");
let gridSize = 16;

function createPad(){
  let modrawingCell = document.querySelectorAll(".cell");
  modrawingCell.forEach(item => item.remove());

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
  element.style.backgroundColor = 'black';
}

const btnGridSize = document.querySelector(".gridSize");

btnGridSize.addEventListener("click", ()=> createPad());


