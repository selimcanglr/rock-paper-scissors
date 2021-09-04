const MOVES = ["rock", "paper", "scissors"]
const playerScoreInfo = document.getElementById("playerScore");
const computerScoreInfo = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    const MIN = 0;
    const MAX = MOVES.length - 1;
    return MOVES[Math.floor(Math.random() * (MAX - MIN + 1)) + MIN];
}

function isGameOver() {
    return playerScore == 5 || computerScore == 5;
}

function playRound(playerMove, computerMove) {
    if (playerMove === "rock" && computerMove === "scissors"
        || playerMove === "paper" && computerMove === "rock"
        || playerMove === "scissors" && computerMove === "paper") {
            playerScore++;
        }
    if (computerMove === "rock" && playerMove === "scissors"
        || computerMove === "paper" && playerMove === "rock"
        || computerMove === "scissors" && playerMove === "paper")

}

function handleClick(playerMove) {
    if (isGameOver()) {
        // TODO: Figure out what to do when the game is over
    }

    let computerMove = computerPlay();
    playRound(playerMove, computerMove);
    updateScores();
}

function updateScores() {

}

document.getElementById("rock").addEventListener("click", playRound("rock"));
document.getElementById("paper").addEventListener("click", playRound("paper"));
document.getElementById("scissors").addEventListener("click", playRound("scissors"));


