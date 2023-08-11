let boxes = document.querySelectorAll(".box");
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
    boxes[i].style = "pointer-events:none";
  }
}

function canBotWin(_value = null) {
  let winIndex = null

  const currentValue = _value || value

  if (boxes[0].innerText == "" && boxes[1].innerText == currentValue && boxes[2].innerText == currentValue) {
    winIndex = 0;
  }
  if (boxes[0].innerText == currentValue && boxes[1].innerText == "" && boxes[2].innerText == currentValue) {
    winIndex = 1;
  }
  if (boxes[0].innerText == currentValue && boxes[1].innerText == currentValue && boxes[2].innerText == "") {
    winIndex = 2
  }

  if (boxes[3].innerText == "" && boxes[4].innerText == currentValue && boxes[5].innerText == currentValue) {
    winIndex = 3;
  }
  if (boxes[3].innerText == currentValue && boxes[4].innerText == "" && boxes[5].innerText == currentValue) {
    winIndex = 4;
  }
  if (boxes[3].innerText == "" && boxes[4].innerText == "" && boxes[5].innerText == currentValue) {
    winIndex = 5;
  }

  if (boxes[6].innerText == "" && boxes[7].innerText == currentValue && boxes[8].innerText == currentValue) {
    winIndex = 6;
  }
  if (boxes[6].innerText == currentValue && boxes[7].innerText == "" && boxes[8].innerText == "") {
    winIndex = 7;
  }
  if (boxes[6].innerText == currentValue && boxes[7].innerText == currentValue && boxes[8].innerText == "") {
    winIndex = 8;
  }

  if (boxes[0].innerText == "" && boxes[4].innerText == currentValue && boxes[8].innerText == currentValue) {
    winIndex = 0
  }
  if (boxes[0].innerText == currentValue && boxes[4].innerText == "" && boxes[8].innerText == currentValue) {
    winIndex = 4;
  }
  if (boxes[0].innerText == currentValue && boxes[4].innerText == currentValue && boxes[8].innerText == "") {
    winIndex = 8;
  }

  if (boxes[2].innerText == "" && boxes[4].innerText == currentValue && boxes[6].innerText == currentValue) {
    winIndex = 2;
  }
  if (boxes[2].innerText == currentValue && boxes[4].innerText == "" && boxes[6].innerText == currentValue) {
    winIndex = 4;
  }
  if (boxes[2].innerText == currentValue && boxes[4].innerText == currentValue && boxes[6].innerText == "") {
    winIndex = 6;
  }

  if (boxes[1].innerText == "" && boxes[4].innerText == currentValue && boxes[7].innerText == currentValue) {
    winIndex = 1;
  }
  if (boxes[1].innerText == currentValue && boxes[4].innerText == "" && boxes[7].innerText == currentValue) {
    winIndex = 4;
  }
  if (boxes[1].innerText == currentValue && boxes[4].innerText == currentValue && boxes[7].innerText == "") {
    winIndex = 7;
  }

  if (boxes[0].innerText == "" && boxes[3].innerText == currentValue && boxes[6].innerText == currentValue) {
    winIndex = 0;
  }
  if (boxes[0].innerText == currentValue && boxes[3].innerText == "" && boxes[6].innerText == currentValue) {
    winIndex = 3;
  }
  if (boxes[0].innerText == currentValue && boxes[3].innerText == currentValue && boxes[6].innerText == "") {
    winIndex = 6;
  }

  if (boxes[2].innerText == "" && boxes[5].innerText == currentValue && boxes[8].innerText == currentValue) {
    winIndex = 2;
  }
  if (boxes[2].innerText == currentValue && boxes[5].innerText == "" && boxes[8].innerText == currentValue) {
    winIndex = 5;
  }
  if (boxes[2].innerText == currentValue && boxes[5].innerText == currentValue && boxes[8].innerText == "") {
    winIndex = 8;
  }

  if (boxes[0].innerText == "" && boxes[1].innerText == currentValue && boxes[2].innerText == currentValue) {
    winIndex = 0;
  }
  if (boxes[0].innerText == currentValue && boxes[1].innerText == "" && boxes[2].innerText == currentValue) {
    winIndex = 1;
  }
  if (boxes[0].innerText == "" && boxes[1].innerText == currentValue && boxes[2].innerText == "") {
    winIndex = 2;
  }

  if (boxes[3].innerText == "" && boxes[4].innerText == currentValue && boxes[5].innerText == currentValue) {
    winIndex = 3;
  }
  if (boxes[3].innerText == currentValue && boxes[4].innerText == "" && boxes[5].innerText == currentValue) {
    winIndex = 4;
  }
  if (boxes[3].innerText == "" && boxes[4].innerText == currentValue && boxes[5].innerText == "") {
    winIndex = 5;
  }

  return winIndex;
}

function bot(isWinnerChecked = false) {
  if (clicks > 9) {
    return;
  }

  let number

  if (!isWinnerChecked) {
    number = canBotWin()
  }
  if (number == null && !isWinnerChecked) {
    number = canBotWin('O')
  }
  if (number == null) {
    number = Math.round(Math.random(0, 8) * 10)
  }

  if (number == null) {
    number = Math.round(Math.random(0, 8) * 10)
  }

  if (number == 9) {
    number = number - 1;
  } else if (number == 10) {
    number = number - 2;
  } else {
    number;
  }

  if (boxes[number].innerText == "") {
    boxes[number].click();
    return;
  }
  return bot(true);
}

function swap() {
  if (value == "O") {
    value = "X";
  } else {
    value = "O";
  }
}

function swapTurn() {

  if (winner) {
    return;
  }

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
  if (boxes[0].innerText == "O" && boxes[1].innerText == "O" && boxes[2].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[3].innerText == "O" && boxes[4].innerText == "O" && boxes[5].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[6].innerText == "O" && boxes[7].innerText == "O" && boxes[8].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[0].innerText == "O" && boxes[4].innerText == "O" && boxes[8].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[2].innerText == "O" && boxes[4].innerText == "O" && boxes[6].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[1].innerText == "O" && boxes[4].innerText == "O" && boxes[7].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[0].innerText == "O" && boxes[3].innerText == "O" && boxes[6].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[2].innerText == "O" && boxes[5].innerText == "O" && boxes[8].innerText == "O") {
    document.getElementById("turn").innerText = "Player 1 Wins";
    scoreO();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[0].innerText == "X" && boxes[1].innerText == "X" && boxes[2].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[3].innerText == "X" && boxes[4].innerText == "X" && boxes[5].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[6].innerText == "X" && boxes[7].innerText == "X" && boxes[8].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[0].innerText == "X" && boxes[4].innerText == "X" && boxes[8].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[2].innerText == "X" && boxes[4].innerText == "X" && boxes[6].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[1].innerText == "X" && boxes[4].innerText == "X" && boxes[7].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[0].innerText == "X" && boxes[3].innerText == "X" && boxes[6].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
  if (boxes[2].innerText == "X" && boxes[5].innerText == "X" && boxes[8].innerText == "X") {
    document.getElementById("turn").innerText = "Bot Wins";
    scoreX();
    winner = true;
    disableBoxes();
    exit();
  }
}

//function result() {
//  if (x[0].innerText == "O" && x[1].innerText == "O" && x[2].innerText == "O") {
//    document.getElementById("turn").innerText = "Player 1 Wins";
//    scoreO();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[3].innerText == "O" && x[4].innerText == "O" && x[5].innerText == "O") {
//    document.getElementById("turn").innerText = "Player 1 Wins";
//    scoreO();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[6].innerText == "O" && x[7].innerText == "O" && x[8].innerText == "O") {
//    document.getElementById("turn").innerText = "Player 1 Wins";
//    scoreO();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[0].innerText == "O" && x[4].innerText == "O" && x[8].innerText == "O") {
//    document.getElementById("turn").innerText = "Player 1 Wins";
//    scoreO();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[2].innerText == "O" && x[4].innerText == "O" && x[6].innerText == "O") {
//    document.getElementById("turn").innerText = "Player 1 Wins";
//    scoreO();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[1].innerText == "O" && x[4].innerText == "O" && x[7].innerText == "O") {
//    document.getElementById("turn").innerText = "Player 1 Wins";
//    scoreO();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[0].innerText == "O" && x[3].innerText == "O" && x[6].innerText == "O") {
//    document.getElementById("turn").innerText = "Player 1 Wins";
//    scoreO();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[2].innerText == "O" && x[5].innerText == "O" && x[8].innerText == "O") {
//    document.getElementById("turn").innerText = "Player 1 Wins";
//    scoreO();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[0].innerText == "X" && x[1].innerText == "X" && x[2].innerText == "X") {
//    document.getElementById("turn").innerText = "Bot Wins";
//    scoreX();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[3].innerText == "X" && x[4].innerText == "X" && x[5].innerText == "X") {
//    document.getElementById("turn").innerText = "Bot Wins";
//    scoreX();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[6].innerText == "X" && x[7].innerText == "X" && x[8].innerText == "X") {
//    document.getElementById("turn").innerText = "Bot Wins";
//    scoreX();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[0].innerText == "X" && x[4].innerText == "X" && x[8].innerText == "X") {
//    document.getElementById("turn").innerText = "Bot Wins";
//    scoreX();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[2].innerText == "X" && x[4].innerText == "X" && x[6].innerText == "X") {
//    document.getElementById("turn").innerText = "Bot Wins";
//    scoreX();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[1].innerText == "X" && x[4].innerText == "X" && x[7].innerText == "X") {
//    document.getElementById("turn").innerText = "Bot Wins";
//    scoreX();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[0].innerText == "X" && x[3].innerText == "X" && x[6].innerText == "X") {
//    document.getElementById("turn").innerText = "Bot Wins";
//    scoreX();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//  if (x[2].innerText == "X" && x[5].innerText == "X" && x[8].innerText == "X") {
//    document.getElementById("turn").innerText = "Bot Wins";
//    scoreX();
//    winner = true;
//    disableBoxes();
//    exit();
//  }
//}

reset.addEventListener("click", () => {
  location.reload();
});

quit.addEventListener("click", () => {
  alert("Come back again to Play");
  window.close();
});

function exit() { }

[...boxes].forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText == "") {
      box.innerText = value;
      box.style = "pointer-events:none";
      swap();
      result();
      swapTurn();
    }
  });
});