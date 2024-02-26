import { Button } from "./components/shared/Button/Button";

export const memoryGameLogic = () => {
    
    let flippedCards = [];
    let timeStarted = false;
    let second = 0;
    let minute = 0;
    let interval;


    const handleFlipCard = (card) => {

        // not allow the user ths click again on the same card
        if(card.classList.contains('is-flipped')) return;

        // Allor the use the click just two cards
        if(flippedCards.length < 2) {
            card.classList.toggle('is-flipped');
            flippedCards.push(card);

            if(!timeStarted){
                interval = setTimer(second, minute);
                timeStarted = true;
            }
        }

        // Check if the two flipped cards match or not
        if(flippedCards.length === 2) {

            const [card1, card2] = flippedCards;
            const imgCard1 = card1.getAttribute('data-image');
            const imgCard2 = card2.getAttribute('data-image');

            if(imgCard1 === imgCard2) {
                flippedCards = [];
            } else {
                setTimeout(() => {
                    flippedCards.forEach(flippedCard => {
                        flippedCard.classList.remove('is-flipped');
                    })
                    flippedCards = []
                }, 1000)
            }

        }

        // When win the match show a message and the play again button
        win(interval);

        // Handle play again button
        const playAgainButton = document.querySelector('.btn-play-again');

        if (!playAgainButton) return;

        playAgainButton.addEventListener('click', () => handlePlayAgain(handlePlayAgain, second, minute))

    }
    
    const win = (interval) => {

        // Find all card in on the screen
        const allCards = Array.from(document.querySelectorAll('.card-container'));
        
        // If all cards have the is-flipped class stop timer, show the win message and the play again button
        if( allCards.every(card => card.classList.contains('is-flipped'))) {
            
            const utilBar = document.querySelector('.memory-game-navbar');
            
            stopTimer(interval);
            utilBar.innerHTML += showWinMessage();
            utilBar.innerHTML += showPlayAgainButton();
        }
    }

    const memoryGameCards = document.querySelectorAll('.card-container');
    memoryGameCards.forEach(card => {
        card.addEventListener('click', () => handleFlipCard(card))
    });
}


const setTimer = (second, minute) => {
    return  setInterval(() => {

    const timerElement = document.querySelector('.memory-game-container .memory-game-navbar .timer');

    if(timerElement ) {
        timerElement.innerHTML = ( minute < 10 ? "0" + minute : minute ) + ":" + 
                                 ( second < 10 ? "0" + second : second );
        second++;
        
        if(second === 60) {
            minute++;
            second = 0;
        }
    }
        

    }, 1000) 
}

const stopTimer = (interval) => {
    clearInterval(interval);
}

const resetTimer = (second, minute) => {
    second = 0;
    minute = 0;
    const timerElement = document.querySelector('.timer');
    timerElement.innerHTML = '00:00';
}

const showWinMessage = () => {
    return `<div class="win-message">You win!!</div>`;
}

const showPlayAgainButton = () => {
    return Button('btn-play-again', 'Play again');
}

const removeWinMessage = () => {
    const winMessage = document.querySelector('.win-message');
    winMessage.innerHTML = '';
}

const removePlayAgainButton = () => {
    const playAgainButton = document.querySelector('.btn-play-again');
    playAgainButton.remove();
}

const unflipAllCards = () => {
    const memoryGameCards = document.querySelectorAll('.card-container');
    memoryGameCards.forEach(card => {
        card.classList.remove('is-flipped');
    });
}

// When clickin on the play again button: reset time, remove win meesage, remove play again button and flip again all cards
const handlePlayAgain = (timeStarted, second, minute) => {
    
    resetTimer(second, minute);
    removeWinMessage();
    removePlayAgainButton();
    unflipAllCards();
    timeStarted = false;

}
