'use strict';

alert("Hello, world.\nThis is Rock Paper Scissors Game on the console.");

let playerTotalScore = 0;
let computerTotalScore = 0;


function game() {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();

    //player choice funciton
    function playerPlay() {
      const playerChoice =  prompt("Please enter the words of 'Rock' or 'Paper' or 'Scissors'. \nUppercase Lowercase Capitalize all OK\nGame continues five times");
      return capitalizeWords(playerChoice);
    }
      
        
      //change the play choice of captalize
      function capitalizeWords(str) {
        let getCapitalizedSentence = str[0].toUpperCase() + str.slice(1).toLowerCase();
        return getCapitalizedSentence;
      }
      
      //computer choice function
      function computerPlay() {
        const computerChoice = ['Rock', 'Paper', 'Scissors'];
        return computerChoice[Math.floor(Math.random()*computerChoice.length)];
      }
      
      //game round function only one time
      function playRound(playerSelection, computerSelection) {
        let playerScore = 0;
        let computerScore = 0;
          if(playerSelection === "Rock" && computerSelection === "Rock" || playerSelection === "Paper" && computerSelection === "Paper" || playerSelection === "Scissors" && computerSelection === "Scissors" ) {
            console.log("Your selection is :" + playerSelection + " Computer Selection is : " + computerSelection + " So, Game is Draw!");
          } else if(playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" || playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore++;
            
            computerTotalScore += computerScore;
            
            console.log("Your selection is :" + playerSelection + " Computer Selection is : " + computerSelection + " So, You Lose!");
          } else if(playerSelection === "Rock" && computerSelection === "Scissors" || playerSelection === "Paper" && computerSelection === "Rock" || playerSelection === "Scissors" && computerSelection === "Paper"){
            playerScore++;
  
            playerTotalScore += playerScore;
  
            console.log("Your selection is :" + playerSelection + " Computer Selection is : " + computerSelection +  " So, You Win!");
          } 
          else if(playerSelection !== "Rock" || playerSelection !== "Paper" ||  playerSelection !== "Scissors"){
              prompt("Please enter the words of 'Rock' or 'Paper' or 'Scissors'.\nUppercase Lowercase Capitalize all OK. \n But another words don't accept the game.");        
          } 

        }
      playRound(playerSelection, computerSelection);
    } 

  game(); 
  console.log("playerScore is : " + playerTotalScore);
  console.log("computerScore is : " + computerTotalScore);
  
  game(); 
  console.log("playerScore is : " + playerTotalScore);
  console.log("computerScore is : " + computerTotalScore);
  
  game(); 
  console.log("playerScore is : " + playerTotalScore);
  console.log("computerScore is : " + computerTotalScore);
  
  game(); 
  console.log("playerScore is : " + playerTotalScore);
  console.log("computerScore is : " + computerTotalScore);
  
  game(); 
  console.log("playerScore is : " + playerTotalScore);
  console.log("computerScore is : " + computerTotalScore);
  
  game(); 
  console.log("TotalplayerScore is : " + playerTotalScore);
  console.log("TotalcomputerScore is : " + computerTotalScore);

  if (playerTotalScore > computerTotalScore) {
    console.log("Congratulation! You win!");
  } else if (playerTotalScore === computerTotalScore) {
    console.log("Oh, You Draw!");
  } else if (playerTotalScore < computerTotalScore) {
    console.log("Oh, sorry. You lose...");
  }

  alert("Game is over. Thank you for playing!");