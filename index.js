// the options from which the computer can pick from
const options = ["rock", "paper", "scissors"];

// results counter
let playerWins = 0;
let computerWins = 0;
let gameRounds = 0;


// the function that randomly picks computer's choice
function computerPlay() {
  return options[Math.floor(Math.random() * options.length)];
}



// converted player's choice to be case insensitive
//
// computer's choice is stored in here
const computerSelection = computerPlay();

//player input/choice
const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
//const convertedChoice = playerSelection.toLowerCase();


//comparing player input vs computer input
function playRound(playerSelection, computerSelection) {
  if (playerSelection == "rock" && computerSelection == "paper") {
    gameRounds++;
    computerWins++;
    return `You lost ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    computerWins++;
    gameRounds++;
    return `You lost ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    computerWins++;
    gameRounds++;
    return `You lost ${computerSelection} beats ${playerSelection}`;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    playerWins++;
    gameRounds++;
    return `Yay! You won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    playerWins++;
    gameRounds++;
    return `Yay! You won! ${playerSelection} beats ${computerSelection}`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    playerWins++;
    gameRounds++;
    return `Yay! You won! ${playerSelection} beats ${computerSelection}`
  } else if (playerSelection == computerSelection) {
    return "Its a draw!";
    gameRounds++;
  }

}

// the game is to be played 5 rounds


function game() {
  let playedGame = '';
  for (let i = 0; i < 5; i++) {
    playedGame = playRound(playerSelection, computerSelection);
  }
  console.log(playedGame)+='n\';
}
game();



// scoreboard logic
if (gameRounds === 5 && playerWins > computerWins) {
  console.log(`Congratulations You Won! You won ${playerWins} out of 5 rounds`);

} else if (gameRounds === 5 && playerWins < computerWins) {
  console.log(`You lost :( You only won ${playerWins} out of 5 rounds`)
}
