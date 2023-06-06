const squares = document.querySelectorAll(".square");
const gameContainer = document.querySelector(".game");
const result = document.querySelector(".result");
const resultContainer = document.querySelector(".resultContainer");
const squaresContent = document.querySelectorAll(".content");
let turn = 0;

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].textContent !== "") return;
    squaresContent[i].textContent = turn % 2 === 0 ? "X" : "O";
    squares[i].appendChild(squaresContent[i]);
    turn++;
    game();
  });
}

function replay() {
  for (let square of squaresContent) square.textContent = "";
  if (!resultContainer.classList.contains("hidden")) {
    for (let square of squares) square.classList.remove("hidden");
    resultContainer.classList.add("hidden");
  }
  turn = 0;
}

function checkWin(player) {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];
  return winConditions.some((condition) =>
    condition.every((index) => squares[index].textContent === player)
  );
}

function game() {
  if (checkWin("X")) {
    result.innerHTML = "Player X wins!";
  } else if (checkWin("O")) {
    result.innerHTML = "Player O wins!";
  } else if (turn === 9) {
    result.innerHTML = "Draw!";
  } else {
    return;
  }
  resultContainer.classList.remove("hidden");
  result.classList.remove("hidden");
  for (let square of squares) square.classList.add("hidden");
}
