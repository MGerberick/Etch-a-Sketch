const h = (1/16);

const drawingPad = document.querySelector(".container");
// const drawingCol = document.createElement("div");
  for (let o = 0; o < 16; o++) { 
    const drawingRow = document.createElement("div");
    drawingPad.appendChild(drawingRow);
    drawingRow.classList.add("row");
    // drawingRow.textContent = `${o}`;
    for (let i = 0; i < 16; i++) {
        let drawingCol = document.createElement("div");
        drawingRow.appendChild(drawingCol);
        drawingCol.classList.add("col");
        // drawingCol.textContent = `${i}`;
    };
  };

// drawingPad.appendChild(drawingRow);
// drawingRow.textContent = 'r';
