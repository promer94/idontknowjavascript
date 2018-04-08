/**
 * Game value
 */
const min = 1;
const max = 50;
const winningNum = getRandomNum(min, max);
let guessesLeft = 3;

/** UI element */
const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

/** Add UI min and max */
minNum.textContent = min;
maxNum.textContent = max;

/** Play again */
game.addEventListener('mousedown', e => {
  if (e.target.className === 'btn btn-primary play-again') {
    window.location.reload();
  }
});
/** Listen for guess */
guessBtn.addEventListener('click', () => {
  message.textContent = '';
  const guess = parseInt(guessInput.value, 10);
  /** Validate input */
  if (isNaN(guess) || guess < min || guess > max) { // eslint-disable-line
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  /** Compare input with winning number */
  if (guess === winningNum) {
    gameOver(true, `You win !, the correct number is ${winningNum}`);
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(false, `Game over !, the correct number is ${winningNum}`);
    } else {
      setMessage(
        guessesLeft === 1
          ? 'you still have the last chance'
          : `you still have ${guessesLeft} guesses left`,
        'red'
      );
    }
  }
});

/** Game over */
function gameOver(won, msg) {
  const color = won === true ? 'green' : 'red';
  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  /** Set winning message */
  setMessage(msg, color);
  guessBtn.className = 'btn btn-primary play-again';
  guessBtn.value = 'Play again';
}
/** Random number */
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
/** Set message */
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
