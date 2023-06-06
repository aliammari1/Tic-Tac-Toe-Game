const squares = document.querySelectorAll(".square");
const game = document.querySelector(".game");
let turn = 0;

for (let square of squares) {
  square.addEventListener("click", function () {
    if (square.textContent !== "") return;
    const p = document.createElement("p");
    if (turn % 2 === 0) {
      p.innerHTML = "X";
      square.appendChild(p);
    } else {
      p.innerHTML = "O";
      square.appendChild(p);
    }
    turn++;
    gameplay();
  });
}

function start() {
  if (turn === 9 || squares.length === 10) {
    for (let square of squares) square.textContent = "";
    turn = 0;
    for (let square of squares) square.classList.remove("hidden");
    game.removeChild(game.lastChild);
  }
};

function replay() {
  const squares = document.querySelectorAll(".game square");
  if (squares.length === 10) {
    for (let square of squares) square.classList.remove("hidden");
    game.removeChild(game.lastChild);
  }
  for (let square of squares) square.textContent = "";
  turn = 0;
};

function checkWin()  {}

function gameplay() {
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
    const squares = document.querySelectorAll(".game square");
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
    const divs = document.querySelectorAll(".game div");
    for (let div of divs) div.classList.add("hidden");
    const div = document.createElement("div");
    div.style.color = "white";
    div.appendChild(p);
    document.querySelector(".game").appendChild(div);
  } else if (turn === 9) {
    let p = document.createElement("p");
    p.innerHTML = "Draw!";
    const divs = document.querySelectorAll(".game div");
    for (let div of divs) div.classList.add("hidden");
    const div = document.createElement("div");
    div.style.color = "white";
    div.appendChild(p);
    document.querySelector(".game").appendChild(div);
  }
};
