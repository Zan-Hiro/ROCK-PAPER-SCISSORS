'use strict';

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "Rock" && computerSelection === "Rock") {
      console.log("Your selection is :" + playerSelection + " Computer Selection is : " + computerSelection + " So, Game is Draw!");
    } else if(playerSelection === "Rock" && computerSelection === "Paper") {
      console.log("Your selection is :" + playerSelection + " Computer Selection is : " + computerSelection + " So, You Lose!");
    } else if(playerSelection === "Rock" && computerSelection === "Scissors"){
      console.log("Your selection is :" + playerSelection + " Computer Selection is : " + computerSelection +  " So, You Win!");
    } else if(playerSelection !== "Rock" || playerSelection !== "Paper" ||  playerSelection !== "Scissors"){
        prompt("Please enter the words of 'Rock' or 'Paper' or 'Scissors'.\nUppercase Lowercase Capitalize all OK. \n But another words don't accept the game.");        
      }
    }
  

const playerSelection = playerPlay();
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);

function playerPlay() {
  const playerChoice =  prompt("Hello, world.\nThis is Rock Paper Scissors Game on the console. \nPlease enter the words of 'Rock' or 'Paper' or 'Scissors'. \nUppercase Lowercase Capitalize all OK");

  return capitalizeWords(playerChoice);
}

function computerPlay() {
  const computerChoice = ['Rock', 'Paper', 'Scissors'];
  return computerChoice[Math.floor(Math.random()*computerChoice.length)];
}

function capitalizeWords(str) {
  let getCapitalizedSentence = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return getCapitalizedSentence;
}