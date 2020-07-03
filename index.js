let x = document.querySelectorAll("#box");
let quit = document.getElementById("quit");
let reset = document.getElementById("reset");
let body = document.getElementById("body");
let startGame = document.getElementById("startGame");
let value = "O";
var clicks = 0;
var click = 0;
var winner = false;

function disableBoxes() {
  for (let i = 0; i <= 8; i++) {
    x[i].style = "pointer-events:none";
  }
}

startGame.addEventListener("click", () => {
  for (let i = 0; i <= 8; i++) {
    x[i].style = "cursor: pointer;";
  }
  startGame.innerText = "Game Has Started";
  startGame.style = "pointer-events:none";
  localStorage.setItem("playerScore", 0);
  localStorage.setItem("botScore", 0);
});

function bot() {
    if (clicks < 9) {
      var number = Math.round(Math.random(0, 8) * 10);
      console.log(number);

      if (number == 9) {
        number = number - 1;
      } else if (number == 10) {
        number = number - 2;
      } else {
        number;
      }

      if (x[number].innerText == "") {
        x[number].click();
      } else {
        bot();
      }
    } else {
    }
}

function swap() {
  if (value == "O") {
    value = "X";
  } else {
    value = "O";
  }
}

function swapTurn() {
  var turn = document.getElementById("turn").innerText;
  if (click == 0) {
    document.getElementById("turn").innerText = "Player 1's Turn";
    click++;
  }
  if (turn == "Player 1's Turn" && click == 1) {
    document.getElementById("turn").innerText = "Player 2's Turn";
    clicks = clicks + 1;
    bot();
  } else {
    document.getElementById("turn").innerText = "Player 1's Turn";
    clicks = clicks + 1;
  }

  if (clicks == "9" && winner == false) {
    document.getElementById("turn").innerText = "Gave Over";
    console.log(winner);
  }
}

function result() {
  if (x[0].innerText == "O" && x[1].innerText == "O" && x[2].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[3].innerText == "O" && x[4].innerText == "O" && x[5].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[6].innerText == "O" && x[7].innerText == "O" && x[8].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[0].innerText == "O" && x[4].innerText == "O" && x[8].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    winner = true;
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
  }
  if (x[2].innerText == "O" && x[4].innerText == "O" && x[6].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[1].innerText == "O" && x[4].innerText == "O" && x[7].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[0].innerText == "O" && x[3].innerText == "O" && x[6].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[2].innerText == "O" && x[5].innerText == "O" && x[8].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[0].innerText == "X" && x[1].innerText == "X" && x[2].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[3].innerText == "X" && x[4].innerText == "X" && x[5].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[6].innerText == "X" && x[7].innerText == "X" && x[8].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[0].innerText == "X" && x[4].innerText == "X" && x[8].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    winner = true;
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
  }
  if (x[2].innerText == "X" && x[4].innerText == "X" && x[6].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[1].innerText == "X" && x[4].innerText == "X" && x[7].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[0].innerText == "X" && x[3].innerText == "X" && x[6].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
  if (x[2].innerText == "X" && x[5].innerText == "X" && x[8].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    winner = true;
    x[0].style = "pointer-events:none";
    x[1].style = "pointer-events:none";
    x[2].style = "pointer-events:none";
    x[3].style = "pointer-events:none";
    x[4].style = "pointer-events:none";
    x[5].style = "pointer-events:none";
    x[6].style = "pointer-events:none";
    x[7].style = "pointer-events:none";
    x[8].style = "pointer-events:none";
  }
}

reset.addEventListener("click", () => {
  location.reload();
});

quit.addEventListener("click", () => {
  alert("Come back again to Play");
  window.close();
});

x[0].addEventListener("click", () => {
  x[0].innerText = value;
  x[0].style = "pointer-events:none";
  swap();
  swapTurn();
  result();
});

x[1].addEventListener("click", () => {
  x[1].innerText = value;
  x[1].style = "pointer-events:none";
  swap();
  swapTurn();
  result();
});

x[2].addEventListener("click", () => {
  x[2].innerText = value;
  x[2].style = "pointer-events:none";
  swap();
  swapTurn();
  result();
});

x[3].addEventListener("click", () => {
  x[3].innerText = value;
  x[3].style = "pointer-events:none";
  swap();
  swapTurn();
  result();
});

x[4].addEventListener("click", () => {
  x[4].innerText = value;
  x[4].style = "pointer-events:none";
  swap();
  swapTurn();
  result();
});

x[5].addEventListener("click", () => {
  x[5].innerText = value;
  x[5].style = "pointer-events:none";
  swap();
  swapTurn();
  result();
});

x[6].addEventListener("click", () => {
  x[6].innerText = value;
  x[6].style = "pointer-events:none";
  swap();
  swapTurn();
  result();
});

x[7].addEventListener("click", () => {
  x[7].innerText = value;
  x[7].style = "pointer-events:none";
  swap();
  swapTurn();
  result();
});

x[8].addEventListener("click", () => {
  x[8].innerText = value;
  x[8].style = "pointer-events:none";
  swap();
  swapTurn();
  result();
});
