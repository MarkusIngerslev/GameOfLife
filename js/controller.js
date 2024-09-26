import * as model from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", init);

function init() {
    console.log("JavaScript is live! 🚀🎉");

    const rows = 15; // Ændre antal rækker
    const cols = 15; // Ændre antal kolonner

    // Initialize model and view
    model.init(rows, cols);
    view.init();

    // Create the board
    view.createBoard(rows, cols);
    view.setClickerListener(handleClick);

    // Update the board with the initial state
    view.updateBoard(model.getGrid());

    // Start the game (or step through manually)
    startGame();
}

function handleClick(row, col) {
    model.toggleCellState(row, col);
    view.updateBoard(model.getGrid());
}

function startGame() {
    setInterval(() => {
        model.getNextGeneration();
        view.updateBoard(model.getGrid());
    }, 500); // Adjust the interval as needed
}
