import * as model from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", init);

function init() {
    console.log("JavaScript is live! 🚀🎉");

    // Lyt til start-knappen
    document.getElementById("start-btn").addEventListener("click", startGame);
}

function startGame() {
    // Hent værdier fra inputfelterne
    const rows = parseInt(document.getElementById("input-rows").value);
    const cols = parseInt(document.getElementById("input-cols").value);
    const loopTimer = parseInt(document.getElementById("input-speed").value);
    const population = parseInt(document.getElementById("input-population").value);

    // Initialize model and view med brugerdefineret rækker og kolonner
    model.init(rows, cols);
    view.init();

    // Opret spillebrættet med den nye størrelse
    view.createBoard(rows, cols);
    view.setClickerListener(handleClick);

    // Sæt nogle celler til at være levende fra start
    populateRandomCells(population);

    // Vis det initiale grid i visningen
    view.updateBoard(model.getGrid());

    // Start spillet med automatisk opdatering af generationer
    startGameLoop(loopTimer);
}

function handleClick(row, col) {
    // Skift celle-status på klik (død eller levende)
    model.toggleCellState(row, col);
    view.updateBoard(model.getGrid());
}

// Funktion til at vælge et antal tilfældige celler, der starter som levende
function populateRandomCells(count) {
    const rows = parseInt(document.getElementById("input-rows").value);
    const cols = parseInt(document.getElementById("input-cols").value);

    for (let i = 0; i < count; i++) {
        const randomRow = Math.floor(Math.random() * rows);
        const randomCol = Math.floor(Math.random() * cols);
        model.toggleCellState(randomRow, randomCol);
    }
}

function startGameLoop(loopTimer) {
    setInterval(() => {
        model.getNextGeneration();
        view.updateBoard(model.getGrid());
    }, loopTimer); // Justér intervallet som ønsket
}
