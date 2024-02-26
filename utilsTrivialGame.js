import { TRIVIAL_QUESTIONS } from "./data/trivialData";

let currentIndex = 0;
let score = 0;
let countdownInterval;
let answeredQuestionCount = 0;

export const trivialGameLogic = () => {
    
    const startButton = document.querySelector('.btn-start');
    startButton.addEventListener('click', () => handleStartGame(startButton));
    
}

// Starting game: remove start game button, show timer - score - number of question - question 1
const handleStartGame = (startButton) => {
    
    currentIndex = 0;
    score = 0;

    hideWinMesage();
    setScore();
    // Set the game with the game bar (timer, score and number of question) and the first question
    removeStartGameButton(startButton);
    showGameBarAfterStartingGame();
    showQuestionAfterStartingGame();
    

    // Countdown for each question and slide evert question after 10 seconds
    countdownForQuestion();
    countCurrenQuestion(1);
    submitAnswer();
}



const handleSubmitAnswer = (event, answer, questionCards) => {
    
    const selectedAnswer = event.target.innerHTML;
    const questionId = parseInt(event.target.closest('.answers-list').id.split('-')[1]);
    const question = TRIVIAL_QUESTIONS.find(question => question.id === questionId);
    const scoreElement = document.querySelector('.trivial-game-container .trivial-game-header .score span')
    
    
    if(selectedAnswer === question.correctAnswer) {
        answer.classList.add('correct-answer');
        score++
        setTimeout(() => {
            scoreElement.innerHTML = `0${score}`;
        })
    } else {
        answer.classList.add('wrong-answer');
    }

    countdownForQuestion();
    
    setTimeout(() => {
        slideQuestionCards(questionCards, currentIndex);
        currentIndex++;
        countCurrenQuestion(currentIndex+1);
    }, 200);
}

const submitAnswer = () => {

    const questionCards = document.querySelectorAll('.question-card');
    
    questionCards.forEach((questionCard) => {
        const answerList = questionCard.querySelectorAll('.answers-list li');
        answerList.forEach((answer) => {
            answer.addEventListener('click', (event) => handleSubmitAnswer(event, answer, questionCards))
        })
    }) 
}


const slideQuestionCards = (questionCards, currentIndex) => {
    questionCards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % questionCards.length;
    questionCards[currentIndex].classList.add('active');
    answeredQuestionCount++;

    if(answeredQuestionCount >= questionCards.length) {
        gameOver();
        return;
    }
}

const removeStartGameButton = (startButton) => {
    startButton.style.display = 'none';
}
 
const showGameBarAfterStartingGame = () => {
    const headerGame = document.querySelectorAll('.box');
    headerGame.forEach(element => {
        element.style.display = 'block';
    });
}

const showQuestionAfterStartingGame = () => {
    const mainContainer = document.querySelector('.trivial-game-main');
    mainContainer.style.display = 'block';
}

const countdownForQuestion = () => {
    const timer = document.querySelector('.trivial-game-container .trivial-game-header .timer span');
    let second = 10;
    clearInterval(countdownInterval)
    countdownInterval = setInterval(() => {
        timer.innerHTML = (second === 10 ?  second : `0${second}`);
        second--
        if(second === -1) {
            second = 10;
            handleTimeReachedZero()
        }
    }, 1000);

}

const countCurrenQuestion = (currentIndex) => {
    const numberOfQuestion = document.querySelector('.trivial-game-container .trivial-game-header .number-questions span');
    numberOfQuestion.innerHTML = currentIndex < 10 ? `0${currentIndex}` : currentIndex;
}

const handleTimeReachedZero = () => {
    const questionCards = document.querySelectorAll('.question-card');
    slideQuestionCards(questionCards, currentIndex);
    currentIndex++;
    countCurrenQuestion(currentIndex + 1);
}

const gameOver = () => {
        // Hide the game elements
        const headerGame = document.querySelectorAll('.box');
        const mainContainer = document.querySelector('.trivial-game-main');
        
        clearInterval(countdownInterval);
        
        headerGame.forEach(element => {
            element.style.display = 'none';
        });
    
        mainContainer.style.display = 'none';

        const allAnswerItems = document.querySelectorAll('.answers-list li');
        allAnswerItems.forEach(item => {
            item.classList.remove('correct-answer');
            item.classList.remove('wrong-answer');
        });
    
        // Display the game over message  
        const container = document.querySelector('.trivial-game-container');
        const winMessage = document.createElement('div');
        winMessage.classList.add('trivial-game-winner');
        winMessage.innerHTML = `<p>Congrats! Your score is: ${score-1}</p>`;
        container.appendChild(winMessage);

        score = 1;
        answeredQuestionCount = 0;
        currentIndex = 0;
        // Show the start game button again
        const startButton = document.querySelector('.btn-start');
        startButton.style.display = 'block';
}

const hideWinMesage = () => {
    const winMsg = document.querySelector('.trivial-game-winner');
    if(winMsg) {
        winMsg.style.display = 'none';
    }
}

const setScore = () => {
    const scoreElement = document.querySelector('.trivial-game-container .trivial-game-header .score span')
    scoreElement.innerHTML = `0${score}`;
}


const bannerResult = () => {
    
}