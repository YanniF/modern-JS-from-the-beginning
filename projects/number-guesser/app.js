/*
  GAME FUNCTION:
  - Player must guess a number between a min and max
  - Player gets a certain amount of guesses
  - Notify player of guesses remaining
  - Notify the player of the correct answer if loose
  - Let player choose to play again
*/

// game values
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI elements
const gameWrapper = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// play again event listener
gameWrapper.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  // validate
  if(isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    guessInput.value = '';
  }
  else {
    // check
    if(guess === winningNum) {
      gameOver('You won 😄', 'green');
    }
    else {
      guessesLeft--;

      if(guessesLeft > 0) {      
        const text = (guessesLeft == 1 ? 'guess' : 'guesses');

        guessInput.style.borderColor = 'red';
        guessInput.value = '';

        setMessage(`Incorrect. You have ${guessesLeft} ${text} left.`, 'red');
      }
      else {
        gameOver(`Game over ☹️. The correct number was ${winningNum}.`, 'blue');
      }
    }
  }  
});

function gameOver(msg, color) {  
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  // play again
  guessBtn.value = 'Play again';
  guessBtn.className = 'play-again';
  guessInput.value = '';
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}