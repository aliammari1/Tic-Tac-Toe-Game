const squares = document.querySelectorAll(".square");
const gameContainer = document.querySelector(".game");
const result = document.querySelector(".result");
const squaresContent = document.querySelectorAll(".content");
let matrix = new Array(Array(3), Array(3), Array(3));
let turn = 0;

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    if (squares[i].textContent !== "") return;
    squaresContent[i].textContent = turn % 2 === 0 ? "X" : "O";
    matrix[Math.floor(i / 3)][i % 3] = turn % 2 === 0 ? 1 : 0;
    squares[i].appendChild(squaresContent[i]);
    turn++;
    game();
    console.log(matrix);
  });
}

function start() {
  if (turn === 9 || squares.length === 10) {
    for (let square of squares) square.textContent = "";
    turn = 0;
    for (let square of squares) square.classList.remove("hidden");
    game.removeChild(game.lastChild);
  }
}

function replay() {
  const squares = document.querySelectorAll(".square");
  if (squares.length === 10) {
    for (let square of squares) square.classList.remove("hidden");
    game.removeChild(game.lastChild);
  }
  for (let square of squares) square.textContent = "";
  turn = 0;
}

function game() {
  if (
    (squares[0].textContent == "X" &&
      squares[1].textContent == "X" &&
      squares[2].textContent == "X") ||
    (squares[3].textContent == "X" &&
      squares[4].textContent == "X" &&
      squares[5].textContent == "X") ||
    (squares[6].textContent == "X" &&
      squares[7].textContent == "X" &&
      squares[8].textContent == "X") ||
    (squares[0].textContent == "X" &&
      squares[3].textContent == "X" &&
      squares[6].textContent == "X") ||
    (squares[1].textContent == "X" &&
      squares[4].textContent == "X" &&
      squares[7].textContent == "X") ||
    (squares[2].textContent == "X" &&
      squares[5].textContent == "X" &&
      squares[8].textContent == "X") ||
    (squares[0].textContent == "X" &&
      squares[4].textContent == "X" &&
      squares[8].textContent == "X") ||
    (squares[2].textContent == "X" &&
      squares[4].textContent == "X" &&
      squares[6].textContent == "X")
  ) {
    let p = document.createElement("p");
    p.innerHTML = "Player X wins!";
    const squares = document.querySelectorAll(".square");
    for (let square of squares) square.classList.add("hidden");
    const div = document.createElement("div");
    div.style.color = "white";
    div.appendChild(p);
    document.querySelector(".game").appendChild(div);
  } else if (
    (squares[0].textContent == "O" &&
      squares[1].textContent == "O" &&
      squares[2].textContent == "O") ||
    (squares[3].textContent == "O" &&
      squares[4].textContent == "O" &&
      squares[5].textContent == "O") ||
    (squares[6].textContent == "O" &&
      squares[7].textContent == "O" &&
      squares[8].textContent == "O") ||
    (squares[0].textContent == "O" &&
      squares[3].textContent == "O" &&
      squares[6].textContent == "O") ||
    (squares[1].textContent == "O" &&
      squares[4].textContent == "O" &&
      squares[7].textContent == "O") ||
    (squares[2].textContent == "O" &&
      squares[5].textContent == "O" &&
      squares[8].textContent == "O") ||
    (squares[0].textContent == "O" &&
      squares[4].textContent == "O" &&
      squares[8].textContent == "O") ||
    (squares[2].textContent == "O" &&
      squares[4].textContent == "O" &&
      squares[6].textContent == "O")
  ) {
    let p = document.createElement("p");
    p.innerHTML = "Player Y wins!";
    for (let square of squares) square.classList.add("hidden");
    div.style.color = "white";
    div.appendChild(p);
    document.querySelector(".game").appendChild(div);
  } else if (turn === 9) {
    let p = document.createElement("p");
    p.innerHTML = "Draw!";
    for (let square of squares) square.classList.add("hidden");
    div.style.color = "white";
    div.appendChild(p);
    document.querySelector(".game").appendChild(div);
  }
}
