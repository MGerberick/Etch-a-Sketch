const drawingPad = document.querySelector(".container");

for (let i=0; i< 256; i++) {
  const drawingCell = document.createElement('div');
  drawingPad.appendChild(drawingCell);
  drawingCell.classList.add('cell');
  drawingCell.id=i;
}

const modrawingCells = document.querySelectorAll(".cell");

modrawingCells.forEach(item => item.addEventListener("mouseover", () => bob(item)));

function bob(item) {
  console.log(item.id);
  let element = document.getElementById(item.id);
  element.style.backgroundColor = 'blue';
}


