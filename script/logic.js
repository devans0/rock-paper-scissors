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

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    let choice = button.textContent;
    console.log(playRound(choice));
  })
})


// Function to run the game for five rounds, displaying the score and prompting the user for
// each step the game is run
// function game(){
//   let playerChoice;
//   let computerChoice;
//   let roundResult;
//   let computerScore = 0;
//   let playerScore = 0;

//   for(let i = 0; i < 5; i++){
//     playerChoice = prompt("Rock, Paper or Scissors?");
//     computerChoice = computerPlay();

//     roundResult = playRound(playerChoice, computerChoice);

//     if (roundResult == 'tie'){
//       console.log(`This round is a tie! Score is You: ${playerScore}; Computer: ${computerScore}`);
//     } else if (roundResult == 'win'){
//       playerScore += 1;
//       console.log(`You win the round! Score is You: ${playerScore}; Computer: ${computerScore}`);
//     } else if (roundResult == 'lose'){
//       computerScore += 1;
//       console.log(`You lose the round! Score is You: ${playerScore}; Computer: ${computerScore}`);
//     }
//   }

//   if (playerScore > computerScore){
//     console.log("Congratulations, you won the game!");
//   } else if (computerScore > playerScore){
//     console.log("You lost the game! Better luck next time!");
//   } else {
//     console.log("The game is a tie!");
//   }
// }

//game();
