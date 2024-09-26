import * as model from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", init);

let generations = 0;

function init() {
    console.log("JavaScript is live! 🚀🎉");

    // Lyt til start-knappen
    document.getElementById("start-btn").addEventListener("click", startGame);
    document.getElementById("clear-btn").addEventListener("click", clearGrid);
    document.getElementById("add-random-btn").addEventListener("click", addRandomCells);    
}

function startGame() {
    // Hent værdier fra inputfelterne
    const rows = parseInt(document.getElementById("input-rows").value);
    const cols = parseInt(document.getElementById("input-cols").value);
    const speed = parseInt(document.getElementById("input-speed").value);
    const liveCells = parseInt(document.getElementById("input-population").value);

    // Initialize model and view med brugerdefineret rækker og kolonner
    model.init(rows, cols);
    view.init();

    // Opret spillebrættet med den nye størrelse
    view.createBoard(rows, cols);
    view.setClickerListener(handleClick);

    // Sæt nogle celler til at være levende fra start
    populateRandomCells(liveCells);

    // Vis det initiale grid i visningen
    view.updateBoard(model.getGrid());

    // Start spillet med automatisk opdatering af generationer
    generations = 0;
    startGameLoop(speed);
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
        generations++;
        view.updateGeneration(generations);
    }, loopTimer); // Justér intervallet som ønsket
}

// Funktion til at tømme grid'et
function clearGrid() {
    const rows = parseInt(document.getElementById("input-rows").value);
    const cols = parseInt(document.getElementById("input-cols").value);

    // Nulstil grid i model.js
    model.init(rows, cols);

    // opdater visningen
    view.updateBoard(model.getGrid());
}

function addRandomCells() {
    const liveCells = parseInt(document.getElementById("input-population").value);
    populateRandomCells(liveCells);

    // opdater visningen
    view.updateBoard(model.getGrid());
}
