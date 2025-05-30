let score1 = 0;
let score2 = 0;
const winningScore = 10;

function rollDice() {
  if (score1 >= winningScore || score2 >= winningScore) return; 

  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  drawDice("dice1", dice1);
  drawDice("dice2", dice2);

  if (dice1 > dice2) {
    score1++;
  } else if (dice2 > dice1) {
    score2++;
  }

  document.getElementById("score1").textContent = score1;
  document.getElementById("score2").textContent = score2;

  if (score1 >= winningScore) {
    showWinner("Player 1");
  } else if (score2 >= winningScore) {
    showWinner("Player 2");
  }
}

function drawDice(id, number) {
  const dice = document.getElementById(id);
  dice.innerHTML = ""; 

  const dotPositions = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
  };

  dotPositions[number].forEach(pos => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.style.gridArea = getGridArea(pos);
    dice.appendChild(dot);
  });
}

function getGridArea(pos) {
  const row = Math.floor(pos / 3) + 1;
  const col = (pos % 3) + 1;
  return `${row} / ${col}`;
}

function showWinner(player) {
    const popup = document.getElementById("winnerPopup");
    const message = document.getElementById("winnerMessage");
    const finalScores = document.getElementById("finalScores");
  
    message.textContent = `${player} wins the game!`;
    finalScores.textContent = `Final Scores - Player 1: ${score1} | Player 2: ${score2}`;
    
    popup.style.display = "flex";
  }

function resetGame() {
  score1 = 0;
  score2 = 0;
  document.getElementById("score1").textContent = score1;
  document.getElementById("score2").textContent = score2;
  document.getElementById("winnerPopup").style.display = "none";
  document.getElementById("dice1").innerHTML = "";
  document.getElementById("dice2").innerHTML = "";
}