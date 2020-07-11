let x = document.querySelectorAll(".box");
let quit = document.getElementById("quit");
let reset = document.getElementById("reset");
let body = document.getElementById("body");
let value = "O";
var clicks = 0;
var click = 0;
var winner = false;
let playerScore = document.getElementById("playerScore");
let botScore = document.getElementById("botScore");
const resetScore = document.getElementById("resetScore");

function scoreO() {
  let p = localStorage.getItem("playerScore");
  p = parseInt(p);
  p++;
  localStorage.setItem("playerScore", p);
}
function scoreX() {
  let p = localStorage.getItem("botScore");
  p = parseInt(p);
  p++;
  localStorage.setItem("botScore", p);
}

if (localStorage.getItem("playerScore") === null) {
  localStorage.setItem("playerScore", 0);
} else {
  console.log("player score was set");
}
if (localStorage.getItem("botScore") === null) {
  localStorage.setItem("botScore", 0);
}

resetScore.addEventListener("click", () => {
  localStorage.setItem("playerScore", 0);
  localStorage.setItem("botScore", 0);
  location.reload();
});

let p = localStorage.getItem("playerScore");
let b = localStorage.getItem("botScore");
playerScore.innerText = `Player's Score : ${p}`;
botScore.innerText = `Bot's Score : ${b}`;

function scoreX() {
  let p = localStorage.getItem("botScore");
  p = parseInt(p);
  p++;
  localStorage.setItem("botScore", p);
}

function disableBoxes() {
  for (i = 0; i <= 8; i++) {
    x[i].style = "pointer-events:none";
  }
}

function bot() {
  if (clicks < 9) {
    var number = Math.round(Math.random(0, 8) * 10);

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
  clicks += 1;
  if (clicks == 9) {
    document.getElementById("turn").innerText = "GAME OVER";
  }
  if (clicks < 9) {
    if (value == "O") {
      document.getElementById("turn").innerText = "Player 1's Turn";
    }
    if (value == "X") {
      document.getElementById("turn").innerText = "Player 2's Turn";
      bot();
    }
  }
}

function result() {
  if (x[0].innerText == "O" && x[1].innerText == "O" && x[2].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[3].innerText == "O" && x[4].innerText == "O" && x[5].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[6].innerText == "O" && x[7].innerText == "O" && x[8].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[0].innerText == "O" && x[4].innerText == "O" && x[8].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[2].innerText == "O" && x[4].innerText == "O" && x[6].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[1].innerText == "O" && x[4].innerText == "O" && x[7].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[0].innerText == "O" && x[3].innerText == "O" && x[6].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[2].innerText == "O" && x[5].innerText == "O" && x[8].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[0].innerText == "X" && x[1].innerText == "X" && x[2].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[3].innerText == "X" && x[4].innerText == "X" && x[5].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[6].innerText == "X" && x[7].innerText == "X" && x[8].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[0].innerText == "X" && x[4].innerText == "X" && x[8].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[2].innerText == "X" && x[4].innerText == "X" && x[6].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[1].innerText == "X" && x[4].innerText == "X" && x[7].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[0].innerText == "X" && x[3].innerText == "X" && x[6].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (x[2].innerText == "X" && x[5].innerText == "X" && x[8].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
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
  result();
  swapTurn();
});

x[1].addEventListener("click", () => {
  x[1].innerText = value;
  x[1].style = "pointer-events:none";
  swap();
  result();
  swapTurn();
});

x[2].addEventListener("click", () => {
  x[2].innerText = value;
  x[2].style = "pointer-events:none";
  swap();
  result();
  swapTurn();
});

x[3].addEventListener("click", () => {
  x[3].innerText = value;
  x[3].style = "pointer-events:none";
  swap();
  result();
  swapTurn();
});

x[4].addEventListener("click", () => {
  x[4].innerText = value;
  x[4].style = "pointer-events:none";
  swap();
  result();
  swapTurn();
});

x[5].addEventListener("click", () => {
  x[5].innerText = value;
  x[5].style = "pointer-events:none";
  swap();
  result();
  swapTurn();
});

x[6].addEventListener("click", () => {
  x[6].innerText = value;
  x[6].style = "pointer-events:none";
  swap();
  result();
  swapTurn();
});

x[7].addEventListener("click", () => {
  x[7].innerText = value;
  x[7].style = "pointer-events:none";
  swap();
  result();
  swapTurn();
});

x[8].addEventListener("click", () => {
  x[8].innerText = value;
  x[8].style = "pointer-events:none";
  swap();
  result();
  swapTurn();
});
