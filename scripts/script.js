const MOVES = ["rock", "paper", "scissors"]
const PLAYER_SCORE_INFO = document.getElementById("playerScore");
const COMPUTER_SCORE_INFO = document.getElementById("computerScore");
const SCOREBOARD_INFO = document.getElementById("scoreInfo");

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
    updateMoveVisuals(playerMove, computerMove);
}

function updateScores() {
    PLAYER_SCORE_INFO.innerHTML = `Player: ${playerScore}`;
    COMPUTER_SCORE_INFO.innerHTML = `Computer: ${computerScore}`;
}

function updateWinnerFeedback(winner) {
    if (winner === "player") {
        SCOREBOARD_INFO.innerHTML = `You Won! ${winnerMove} beats ${loserMove}`;
    }
    else if (winner === "computer") {
        SCOREBOARD_INFO.innerHTML = `You Lost! ${loserMove} gets beaten by ${winnerMove}`;
    }
    else {
        SCOREBOARD_INFO.innerHTML = "It's a Draw!";
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function updateMoveVisuals(playerMove, computerMove) {
    // Why the hack is playerIcon null??????
    const playerIcon = document.getElementById("playerIcon");
    const computerIcon = document.getElementById("computerIcon");

    playerIcon.classList = `far fa-hand-${playerMove} active`;
    computerIcon.classList = `far fa-hand-${computerMove} active`;
}

// Add event listeners to buttons 
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorButton = document.getElementById("scissors");

rockButton.addEventListener("click", () => handleClick("rock"));
paperButton.addEventListener("click", () =>  handleClick("paper"));
scissorButton.addEventListener("click", () =>  handleClick("scissors"));
