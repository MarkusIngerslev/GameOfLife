export { init, getNextGeneration, toggleCellState, getGrid };

let grid;
let rows, cols;

// Initialize the model and create the grid
function init(r = 10, c = 10) {
    console.log("Model initialized");
    rows = r;
    cols = c;
    grid = createEmptyGrid(rows, cols);
}

// Create an empty grid with all cells set to 0 (dead)
function createEmptyGrid(rows, cols) {
    return Array.from({ length: rows }, () => Array(cols).fill(0));
}

// Get the current state of the grid
function getGrid() {
    return grid;
}

// Toggle the state of a cell (for manual toggling by click)
function toggleCellState(row, col) {
    grid[row][col] = grid[row][col] === 1 ? 0 : 1;
}

// Count live neighbors of a cell
function countLiveNeighbors(grid, row, col) {
    let liveNeighbors = 0;
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (i === 0 && j === 0) continue; // Skip the cell itself
            const newRow = row + i;
            const newCol = col + j;
            if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                liveNeighbors += grid[newRow][newCol];
            }
        }
    }
    return liveNeighbors;
}

// Get the next generation of the grid based on Conway's rules
function getNextGeneration() {
    const newGrid = createEmptyGrid(rows, cols);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const liveNeighbors = countLiveNeighbors(grid, row, col);

            if (grid[row][col] === 1) {
                // Cell is alive
                if (liveNeighbors < 2 || liveNeighbors > 3) {
                    // Cell dies
                    newGrid[row][col] = 0;
                } else {
                    // Cell lives
                    newGrid[row][col] = 1;
                }
            } else {
                // Cell is dead
                if (liveNeighbors === 3) {
                    // Cell becomes alive
                    newGrid[row][col] = 1;
                }
            }
        }
    }

    grid = newGrid;
    return grid;
}
