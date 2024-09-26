export { init, createBoard, setClickerListener, updateBoard };

function init() {
    console.log("View is live! 🚀🎉");
}

function createBoard(rows, cols) {
    const board = document.getElementById("board");

    // Dynamisk indstilling af grid dimensioner baseret på rows og cols
    const cellSize = 20; // Størrelsen på cellerne i pixels (kan justeres)

    // Sæt grid-template baseret på rows og cols
    board.style.gridTemplateColumns = `repeat(${cols}, ${cellSize}px)`;
    board.style.gridTemplateRows = `repeat(${rows}, ${cellSize}px)`;

    // Tømmer eksisterende celler, hvis nødvendigt
    board.innerHTML = "";

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            board.appendChild(cell);
        }
    }
}

function setClickerListener(handler) {
    document.getElementById("board").addEventListener("click", (event) => {
        if (event.target.classList.contains("cell")) {
            const row = event.target.dataset.row;
            const col = event.target.dataset.col;
            handler(row, col);
        }
    });
}

function updateBoard(grid) {
    const board = document.getElementById("board");
    const cells = board.getElementsByClassName("cell");

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            const index = row * grid[row].length + col;
            const cell = cells[index];

            if (grid[row][col] === 1) {
                cell.style.backgroundColor = "black";
            } else {
                cell.style.backgroundColor = "white";
            }
        }
    }
}
