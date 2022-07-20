(function () {
  let playerScore = 0;
  let computerScore = 0;

  const btns = document.querySelector(".cta-btns");
  const playerScoreLabel = document.querySelector(".player-score");
  const computerScoreLabel = document.querySelector(".computer-score");
  const roundResult = document.querySelector(".round-result");
  const modal = document.querySelector(".modal");
  const playerWon = document.querySelector(".game-result-player-won");
  const computerWon = document.querySelector(".game-result-player-lost");
  const playerTryBtn = document.querySelector(".player-try");
  const computerTryBtn = document.querySelector(".computer-try");
  const playerGameScore = document.querySelector(".game-score-player");
  const computerGameScore = document.querySelector(".game-score-computer");

  const randomNumGenerator = () => {
    let randomNum = Math.floor(Math.random() * 3);
    return randomNum;
  };

  const computerPlay = () => {
    let gameKeyWords = ["rock", "paper", "scissors"];
    return gameKeyWords[randomNumGenerator()];
  };

  const gameReset = () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreLabel.textContent = playerScore;
    computerScoreLabel.textContent = computerScore;
    roundResult.textContent = "Let's go...";
    roundResult.classList.remove("round--loser");
    roundResult.classList.remove("round--winner");
  };

  modal.addEventListener("click", () => {
    modal.classList.remove("show");
    playerWon.classList.remove("show");
    computerWon.classList.remove("show");
    gameReset();
  });

  playerTryBtn.addEventListener("click", () => {
    playerWon.classList.remove("show");
    modal.classList.remove("show");
    gameReset();
  });

  computerTryBtn.addEventListener("click", () => {
    computerWon.classList.remove("show");
    modal.classList.remove("show");
    gameReset();
  });

  const winnerChecker = () => {
    if (playerScore === 5) {
      setTimeout(() => {
        modal.classList.add("show");
        playerWon.classList.add("show");
      }, 400);
      playerGameScore.textContent = `You won with score ${playerScore}:${computerScore}`;
    }
    if (computerScore === 5) {
      setTimeout(() => {
        modal.classList.add("show");
        computerWon.classList.add("show");
      }, 400);
      computerGameScore.textContent = `You lost with score ${playerScore}:${computerScore}`;
    }
  };

  const playRound = e => {
    const playerPick = e.target.value;
    const computerPick = computerPlay();
    if (playerPick == computerPick) {
      roundResult.classList.remove("round--loser");
      roundResult.classList.remove("round--winner");
      roundResult.textContent = "It's a tie";
      return;
    }

    if (computerPick === "rock") {
      switch (playerPick) {
        case "paper":
          playerScore++;
          playerScoreLabel.textContent = playerScore;
          roundResult.textContent = `You Win! ${playerPick} beats ${computerPick}`;
          roundResult.classList.remove("round--loser");
          roundResult.classList.add("round--winner");
          winnerChecker();
          break;
        case "scissors":
          computerScore++;
          computerScoreLabel.textContent = computerScore;
          roundResult.textContent = `You Lose! ${computerPick} beats ${playerPick}`;
          roundResult.classList.remove("round--winner");
          roundResult.classList.add("round--loser");
          winnerChecker();
          break;
      }
    } else if (computerPick === "paper") {
      switch (playerPick) {
        case "scissors":
          playerScore++;
          playerScoreLabel.textContent = playerScore;
          roundResult.textContent = `You Win! ${playerPick} beats ${computerPick}`;
          roundResult.classList.remove("round--loser");
          roundResult.classList.add("round--winner");
          winnerChecker();
          break;
        case "rock":
          computerScore++;
          computerScoreLabel.textContent = computerScore;
          roundResult.textContent = `You Lose! ${computerPick} beats ${playerPick}`;
          roundResult.classList.remove("round--winner");
          roundResult.classList.add("round--loser");
          winnerChecker();
          break;
      }
    } else {
      switch (playerPick) {
        case "rock":
          playerScore++;
          playerScoreLabel.textContent = playerScore;
          roundResult.textContent = `You Win! ${playerPick} beats ${computerPick}`;
          roundResult.classList.remove("round--loser");
          roundResult.classList.add("round--winner");
          winnerChecker();
          break;
        case "paper":
          computerScore++;
          computerScoreLabel.textContent = computerScore;
          roundResult.textContent = `You Lose! ${computerPick} beats ${playerPick}`;
          roundResult.classList.remove("round--winner");
          roundResult.classList.add("round--loser");
          winnerChecker();
          break;
      }
    }
  };

  btns.addEventListener("click", playRound);
})();
