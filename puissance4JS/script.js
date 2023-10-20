document.addEventListener("DOMContentLoaded", function () {
    const board = document.querySelector(".board");
    const player1ColorInput = document.getElementById("player1-color");
    const player2ColorInput = document.getElementById("player2-color");
    const startButton = document.getElementById("start-button");

    let currentPlayer = 1;
    let boardArray = [];

    function createBoard() {
        for (let row = 0; row < 6; row++) {
            boardArray[row] = [];
            for (let col = 0; col < 7; col++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = row;
                cell.dataset.col = col;
                board.appendChild(cell);
                boardArray[row][col] = null;

                cell.addEventListener("click", function () {
                    dropPiece(col);
                });
            }
        }
    }

    function dropPiece(col) {
        for (let row = 5; row >= 0; row--) {
            if (boardArray[row][col] === null) {
                const cell = document.querySelector(`[data-row='${row}'][data-col='${col}']`);
                const color = currentPlayer === 1 ? player1ColorInput.value : player2ColorInput.value;
                cell.style.backgroundColor = color;
                boardArray[row][col] = currentPlayer;
                if (checkWin(row, col)) {
                    setTimeout(() => {
                        alert(`Joueur ${currentPlayer} a gagné !`);
                        startGame();
                    }, 100);
                } else if (checkDraw()) {
                    setTimeout(() => {
                        alert("Match nul !");
                        startGame();
                    }, 100);
                } else {
                    currentPlayer = currentPlayer === 1 ? 2 : 1;
                }
                break;
            }
        }
    }

    function checkWin(row, col) {
        const directions = [
            { x: 1, y: 0 },
            { x: 0, y: 1 },
            { x: 1, y: 1 },
            { x: 1, y: -1 }
        ];

        for (const dir of directions) {
            let count = 1;
            for (let i = 1; i <= 3; i++) {
                const newRow = row + dir.y * i;
                const newCol = col + dir.x * i;
                if (isValidCell(newRow, newCol) && boardArray[newRow][newCol] === currentPlayer) {
                    count++;
                } else {
                    break;
                }
            }

            for (let i = 1; i <= 3; i++) {
                const newRow = row - dir.y * i;
                const newCol = col - dir.x * i;
                if (isValidCell(newRow, newCol) && boardArray[newRow][newCol] === currentPlayer) {
                    count++;
                } else {
                    break;
                }
            }

            if (count >= 4) {
                return true;
            }
        }

        return false;
    }

    function checkDraw() {
        for (let row = 0; row < 6; row++) {
            for (let col = 0; col < 7; col++) {
                if (boardArray[row][col] === null) {
                    return false;
                }
            }
        }
        return true; 
    }

    function isValidCell(row, col) {
        return row >= 0 && row < 6 && col >= 0 && col < 7;
    }

    function startGame() {
        board.innerHTML = "";
        createBoard();
        currentPlayer = 1;
    }

    startButton.addEventListener("click", startGame);
});
