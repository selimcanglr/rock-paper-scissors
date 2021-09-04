const MOVES = ["rock", "paper", "scissors"]
const playerScoreInfo = document.getElementById("playerScore");
const computerScoreInfo = document.getElementById("computerScore");
const scoreboardInfo = document.getElementById("scoreInfo");

let playerScore = 0;
let computerScore = 0;
let winnerMove = "";
let loserMove = "";

function computerPlay() {
    const MIN = 0;
    const MAX = MOVES.length - 1;
    return MOVES[Math.floor(Math.random() * (MAX - MIN + 1)) + MIN];
}

function isGameOver() {
    return playerScore == 5 || computerScore == 5;
}

function playRound(playerMove, computerMove) {
    // Player wins
    if (playerMove === "rock" && computerMove === "scissors"
        || playerMove === "paper" && computerMove === "rock"
        || playerMove === "scissors" && computerMove === "paper") {
            playerScore++;
            winner = "player";
            winnerMove = capitalize(playerMove);
            loserMove = capitalize(computerMove);
    }
    // Computer Wins
    else if (computerMove === "rock" && playerMove === "scissors"
        || computerMove === "paper" && playerMove === "rock"
        || computerMove === "scissors" && playerMove === "paper") {
            computerScore++;
            winner = "computer";
            winnerMove = capitalize(computerMove);
            loserMove = capitalize(playerMove);
    }
    // Draw
    else {
        winner = "draw";
    }

}

function handleClick(playerMove) {
    if (isGameOver()) {
        // TODO: Figure out what to do when the game is over
    }

    let computerMove = computerPlay();
    playRound(playerMove, computerMove);
    updateScores();
    updateWinnerFeedback(winner);
}

function updateScores() {
    playerScoreInfo.innerHTML = `Player: ${playerScore}`;
    computerScoreInfo.innerHTML = `Computer: ${computerScore}`;
}

function updateWinnerFeedback(winner) {
    if (winner === "player") {
        scoreboardInfo.innerHTML = `You Won! ${winnerMove} beats ${loserMove}`;
    }
    else if (winner === "computer") {
        scoreboardInfo.innerHTML = `You Lost! ${loserMove} gets beaten by ${winnerMove}`;
    }
    else {
        scoreboardInfo.innerHTML = "It's a Draw!";
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Add event listeners to buttons 
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => handleClick("rock"));
paperButton.addEventListener("click", () =>  handleClick("paper"));
scissorButton.addEventListener("click", () =>  handleClick("scissors"));
