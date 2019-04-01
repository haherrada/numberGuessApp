/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the player of the correct answer if loose
- Let player choose to play again
*/

let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBTN = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBTN.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);
  console.log(guess);

  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check if won
  if(guess === winningNum){
    // Disable input
    guessInput.disabled = true;
    // Change the border color
    guessInput.style.borderColor = 'green';
    // Set message
    setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
  } else {
    // Wrong Number
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      // Game Over - Lost
    } else {
      // Game continues - answer wrong
    }
  }
});

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}