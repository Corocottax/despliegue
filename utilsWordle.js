import { WORDS, getWord } from './data/wordleData';
import { createGuessResults } from './components/pages/Wordle/Wordle'

let currentIndexRow = 0;
let numberOfGuess = 0;
let correctWord = '';

export const WordleLogic = () => {
    
    correctWord = getWord(WORDS);
    
    const form = document.querySelector('#guess-form');
    form.addEventListener('submit',  handleEnterGuess)

}


const handleEnterGuess = (event) => {
    
    event.preventDefault();
    enterGuess();
}

const enterGuess = () => {
    
    numberOfGuess++;
    const inputGuess = document.querySelector('#guess-input');
    const rows = document.querySelectorAll('.row');
    const currentRow = rows[currentIndexRow];
    const cells = currentRow.querySelectorAll('.cell');
    let guessValue = inputGuess.value.toUpperCase();
    
    const correctPosition = [];
    
    for(let i = 0; i < guessValue.length; i++) {
        cells[i].innerHTML = guessValue[i];
        
        const indexOfLetter = correctWord.indexOf(guessValue[i]);
        
        if(indexOfLetter !== -1 && !correctPosition.includes(indexOfLetter)) {
            correctPosition.push(indexOfLetter);
            if(indexOfLetter === i) {
                
                cells[i].style.backgroundColor = getVarColor('--tertiary-color');
            } else {
                cells[i].style.backgroundColor = getVarColor('--secondary-color');
            }
        }
    }
    
    currentIndexRow = currentIndexRow + 1;

    if(correctWord === guessValue) {
        gameOver(inputGuess, 'win');
    }
    
    if(numberOfGuess >= 6 && correctWord !== guessValue) {
        gameOver(inputGuess, 'lost');
    }
    
    inputGuess.value = '';
}

const getVarColor = (color) => {
    return window.getComputedStyle(document.documentElement).getPropertyValue(color);
}

const gameOver = (inputGuess, status) => {
    const container = document.querySelector('.wordle-container');

    const gameOverMessagecContainer = document.createElement('div');
    
    gameOverMessagecContainer.classList.add('msg-container',`${status}-msg-container`);

    const gameOverMessage = document.createElement('p');
    gameOverMessage.innerHTML = status === 'win' ? `Congrats! You got it in ${numberOfGuess} guess` : `Sorry, the correct word is ${correctWord}`;

    const restartGameButton = document.createElement('button');
    restartGameButton.innerHTML = 'Restart game';
    
    gameOverMessagecContainer.appendChild(gameOverMessage);
    gameOverMessagecContainer.appendChild(restartGameButton);

    container.appendChild(gameOverMessagecContainer);
    if(inputGuess) inputGuess.disabled = true;

    restartGameButton.addEventListener('click', () => handleRestartGame(inputGuess))
}

const handleRestartGame = (inputGuess) => {
    resetGame(inputGuess);
    WordleLogic();
}

const resetGame = (inputGuess) => {
    currentIndexRow = 0;
    numberOfGuess = 0;
    correctWord = '';

    // Enable input field if it was disabled
    inputGuess.disabled = false;

    // Clear existing messages and results
    const msgContainer = document.querySelector('.msg-container');
    if (msgContainer) {
        msgContainer.remove();
    }

    // Clear the grid of row-cells
    const containerGuess = document.querySelector('.guess-container');
    containerGuess.innerHTML = ''; // Clear existing content
    createGuessResults(containerGuess);

    // Remove any game-over messages
    const gameOverMessagecContainer = document.querySelector('.msg-container');
    if (gameOverMessagecContainer) {
        gameOverMessagecContainer.remove();
    }
}