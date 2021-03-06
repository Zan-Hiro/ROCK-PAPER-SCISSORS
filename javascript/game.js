  'use strict';

  //Get html classes
  const yourChoice = document.querySelector('.yourChoice');
  const computerSelect = document.querySelector('.computerChoice');
  const yourScoreDiv = document.querySelector('.yourscore');
  const computerScoreDiv = document.querySelector('.computerscore');
  const gameResult = document.querySelector('.game-result');

  //Score Variables
  let playerChoice = "";
  let playerScore = 0;
  let computerScore = 0;
  let playerTotalScore = 0;
  let computerTotalScore = 0;

  //Player and Computer selection Variables
  const playerSelection = playerChoice;

  //Play game function
  function playRound() {

    //get Click Event 
    window.addEventListener('click', e => {
      if(e.target.className === "container") return;    
      const buttons = document.querySelector(`.${e.target.className}`);
  
      if(buttons.className === "btnrock") {
        playerChoice = "Rock";
        yourChoice.innerText = playerChoice;
      } else if(buttons.className === "btnpaper") {
        playerChoice = "Paper";
        yourChoice.innerText = playerChoice;
      } else if(buttons.className === "btnscissors") {
        playerChoice = "Scissors";
        yourChoice.innerText = playerChoice;
      }

      computer();

      win();

      draw();

      lost();

      result();    
  });
}

playRound();

//Computer selection(rock or paper or scissors)
function computer() {
  const computerChoice = ['Rock', 'Paper', 'Scissors'];
  const computerSelection = computerChoice[Math.floor(Math.random()*computerChoice.length)];
  computerSelect.innerText = computerSelection;
}

//In the case Win, DOM Manipulation
function win() {
  if(yourChoice.innerText === "Rock" && computerSelect.innerText === "Scissors" || yourChoice.innerText === "Paper" && computerSelect.innerText === "Rock" || yourChoice.innerText === "Scissors" && computerSelect.innerText === "Paper"){
    playerScore++;
  
    playerTotalScore = playerScore;

    yourScoreDiv.innerText = playerScore;
    computerScoreDiv.innerText = computerScore;

    gameResult.style.color = "blue";
    gameResult.innerText = "You Win!";
  }
}

//In the case Draw, DOM Manipulation
function draw() {
  if((yourChoice.innerText === "Rock" && computerSelect.innerText === "Rock") || (yourChoice.innerText === "Paper" && computerSelect.innerText === "Paper") || (yourChoice.innerText === "Scissors" && computerSelect.innerText === "Scissors" )) {
    playerScore += 0;
    computerScore += 0;

    yourScoreDiv.innerText = playerScore;
    computerScoreDiv.innerText = computerScore;

    gameResult.style.color = "green";
    gameResult.innerText = "Game is Draw!";
  } 
}

//In the case Lost, DOM Manipulation
function lost() {
  if(yourChoice.innerText === "Rock" && computerSelect.innerText === "Paper" || yourChoice.innerText === "Paper" && computerSelect.innerText === "Scissors" || yourChoice.innerText === "Scissors" && computerSelect.innerText === "Rock") {

    computerScore++;

    yourScoreDiv.innerText = playerScore;
    computerScoreDiv.innerText = computerScore;
  
    computerTotalScore = computerScore;

    gameResult.style.color = 'red'; 
    gameResult.innerText = "You Lose!";
    } 
}

//After games, reset score
function resetScore() {
  playerScore = 0;
  computerScore = 0;
  playerTotalScore = 0;
  computerTotalScore = 0;
}

//After games, display result
function result() {
  if(playerTotalScore === 5 || computerTotalScore === 5) {
    if (playerTotalScore === 5) {
      gameResult.style.color = "blue";
      gameResult.innerText = 'Game is Over. Congratulation! You win!';
    } else if (computerTotalScore === 5) {
      gameResult.style.color = "red";
      gameResult.innerText = "Game is Over. Sorry. You lose...";
    }
    resetScore();
  } 
}