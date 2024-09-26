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

    // Initialize model and view med brugerdefineret rækker og kolonner
    model.init(rows, cols);
    view.init();

    // Opret spillebrættet med den nye størrelse
    view.createBoard(rows, cols);
    view.setClickerListener(handleClick);

    // Vis det initiale grid i visningen
    view.updateBoard(model.getGrid());

    // Start spillet med automatisk opdatering af generationer
    startGameLoop();
}

function handleClick(row, col) {
    // Skift celle-status på klik (død eller levende)
    model.toggleCellState(row, col);
    view.updateBoard(model.getGrid());
}

function startGameLoop() {
    setInterval(() => {
        model.getNextGeneration();
        view.updateBoard(model.getGrid());
    }, 500); // Justér intervallet som ønsket
}
