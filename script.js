const drawingPad = document.querySelector(".container");
const drawingRow = document.createElement("div");
// const drawingCol = document.createElement("div");

for (let i = 0; i < 16; i++) {
    let drawingCol = document.createElement("div");
    drawingRow.appendChild(drawingCol);
    drawingCol.textContent = i;
}

drawingPad.appendChild(drawingRow);
// drawingRow.textContent = 'r';
