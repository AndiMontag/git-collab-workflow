//random number
let randomNumber = Math.floor(Math.random() * 100) + 1;
//counter
var tries = 0
//defining the form
const form = document.querySelector('.input-form');
const guesses = document.querySelector('#guesses');
const feedback = document.querySelector('#feedback');
//submit listener
form.addEventListener('submit', e => {     
    e.preventDefault();
    let userGuess = Number(guessField.value);
    tries++;
    //getting the guesses feedback
    if (tries === 1) {
        guesses.innerHTML = `Previous guesses: `
    } guesses.innerHTML += userGuess + "  ";
    if (userGuess === randomNumber) {
        feedback.innerHTML = 'Congrats! You got it right!';
        feedback.setAttribute('class', 'justRight');
        gameOver();
    } else if (tries >= 10) {
        feedback.innerHTML = 'Too many attempts! GAME OVER!';
        feedback.setAttribute('class', 'tooMany');
        gameOver();
    } else {
        if (userGuess > randomNumber) {
            feedback.innerHTML = 'WRONG! That guess was too big!';
            feedback.setAttribute('class', 'tooBig');
        } else {
            feedback.innerHTML = 'WRONG! That guess was too small!';
            feedback.setAttribute('class', 'tooSmall');
        }
    }
    guessField.value = '';
});

//game over
function gameOver() {
    guessField.disabled = true;
    const resetButton = document.createElement('button');
    resetButton.innerText = 'Start new game!';
    resetButton.style.fontSize = 'x-large'; // Set the font size
    resetButton.style.cursor = 'pointer'; // Add a pointer cursor
    resetButton.addEventListener('click', e => {
        e.preventDefault();
        resetButton.parentNode.removeChild(resetButton);
        resetGame();
    });

    const resetContainer = document.getElementById('reset-container');
    resetContainer.appendChild(resetButton); // Append the button to the reset container
    resetButton.focus();
}

function resetGame() {
    //reset variables
    randomNumber = Math.floor(Math.random() * 100) + 1;
    tries = 0;
    //resetHTML
    guesses.innerHTML = '';
    feedback.innerHTML = '';
    guessField.value = '';
    guessField.disabled = false;
    guessField.focus();
};