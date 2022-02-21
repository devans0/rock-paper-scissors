// Logic for Rock Paper Scissors game created as part of The Odin Project
//
// Game outline:
//   - Ask user for a selection (Rock, Paper or Scissors)
//   - Determine what the game will choose to play
//   - Compare results of user and game selections
//   - Report to the user whether they have won or lost

// Function to create a random choice for the computer to play
// Randomize a value between 1 and 3 inclusive and then assign a selection to the computer
// based on that random number.
function computerPlay(){
  let randomSelect = Math.floor(Math.random() * 3) + 1;
  let result;
  switch (randomSelect){
    case 1:
      return result = "Rock";
      break;
    case 2:
      return result  = "Paper";
      break;
    case 3:
      return result = "Scissors";
      break;
  }
}

// Function that compares the value of the computer's selection against that of the user
// then outputs the value of the result to the console.
function playRound(playerSelection){
  const playerSelect = playerSelection.toLowerCase();
  const computerSelect = computerPlay().toLowerCase();
  let result;

  if(playerSelect === 'rock'){
      if (computerSelect == 'rock'){
        result = 'tie';
        return result;
      } else if (computerSelect == 'paper'){
        result = 'lose';
        return result;
      } else if (computerSelect == 'scissors'){
        result = 'win';
        return result;
      }
  }

  if(playerSelect === 'paper'){
      if (computerSelect == 'rock'){
        result = 'win';
        return result;
      } else if (computerSelect == 'paper'){
        result = 'tie';
        return result;
      } else if (computerSelect == 'scissors'){
        result = 'lose';
        return result;
      }
  }

  if(playerSelect === 'scissors'){
      if (computerSelect == 'rock'){
        result = 'lose';
        return result;
      } else if (computerSelect == 'paper'){
        result = 'win';
        return result;
      } else if (computerSelect == 'scissors'){
        result = 'tie';
        return result;
      }
  }

  result = 'error';
  return result;
}

function updateResults(gameResult){
  let resultDisplay = document.querySelector('#results');
  let resultMessage;

  if(gameResult == 'win'){
    resultMessage = 'Congratulations! You won!';
  } else if (gameResult == 'lose'){
    resultMessage = 'Sorry! You lost, try again!';
  } else if (gameResult == 'tie'){
    resultMessage = 'It\'s a tie! Try again!';
  }

  if(gameResult == 'gamewin'){
    resultMessage = 'You won the game! Well done! Refresh to play again.';
  } else if (gameResult == 'gamelose'){
    resultMessage = 'You lost the game, better luck next time. Refresh to play again.';
  } else if (gameResult == 'gametie'){
    resultMessage = 'The game is tied! Refresh to play again.';
  }

  resultDisplay.textContent = resultMessage;
  return;
}

// Run the game for five rounds, display score and alert user to wins and losses
const buttons = document.querySelectorAll('button');
let scoreDisplay = document.querySelector('#score');
let roundDisplay = document.querySelector('#rounds');
roundDisplay.textContent = '1';

let playerScore = 0;
let compScore = 0;
let roundResult;
let gameRound = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    roundResult = playRound(button.textContent);
    updateResults(roundResult);
    gameRound += 1;
    roundDisplay.textContent = `${gameRound}`;

    if (gameRound === 5){
      if (playerScore > compScore){
        updateResults('gamewin');
      } else if (playerScore < compScore){
        updateResults('gamelose');
      } else if (playerScore == compScore){
        updateResults('gametie');
      }
    }

    if (roundResult == 'win'){
      playerScore += 1;
      scoreDisplay.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    } else if (roundResult == 'lose'){
      compScore += 1;
      scoreDisplay.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    } else {
      scoreDisplay.textContent = `Player: ${playerScore} Computer: ${compScore}`;
    }

  })
})
