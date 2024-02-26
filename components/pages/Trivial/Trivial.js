import './Trivial.css';
import { TRIVIAL_QUESTIONS } from '../../../data/trivialData';
import { Button } from '../../shared/Button/Button';

export const Trivial = () => {

    const container = document.createElement('div');
    container.classList.add('trivial-game-container');

    createHaderGame(container);

    createCardQuestion(container);

    return container.outerHTML;
}

const createHaderGame = (container) => {
    
    const headerContainer = document.createElement('div');
    headerContainer.classList.add('trivial-game-header');

    createStartGameButton(headerContainer);

    createTimerElement(headerContainer);

    createScoreElement(headerContainer);

    createNumberOfQuestionsElement(headerContainer);

    container.appendChild(headerContainer);
}
 
const createStartGameButton = (headerContainer) => {
    const startButton = Button('btn-start', 'Start game');
    headerContainer.innerHTML = startButton;
}

const createTimerElement = (headerContainer) => {
    const timer = document.createElement('p');
    timer.classList.add('box','timer');
    timer.innerHTML = 'TIMER: '
    
    const timerSeconds = document.createElement('span');
    timerSeconds.innerHTML = '10';
    timer.appendChild(timerSeconds);
    
    headerContainer.appendChild(timer);
}

const createScoreElement = (headerContainer) => {
    const score = document.createElement('p');
    score.classList.add('box','score');
    score.innerHTML = 'SCORE: ';
    
    const scoreNumber = document.createElement('span');
    scoreNumber.innerHTML = '00';
    score.appendChild(scoreNumber);
    
    headerContainer.appendChild(score);
}

const numberOfQuestion = () => {
    const number = document.createElement('span');
    number.innerHTML = '01';
    return number;
}

const createNumberOfQuestionsElement = (headerContainer) => {
    const numberOfQuestions = document.createElement('p');
    numberOfQuestions.classList.add('box','number-questions');
    numberOfQuestions.innerText = `QUESTION: `;
    numberOfQuestions.appendChild(numberOfQuestion()); 
    numberOfQuestions.innerHTML += ` / ${TRIVIAL_QUESTIONS.length}`;
    headerContainer.appendChild(numberOfQuestions);
}

const createCardQuestion = (container) => {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('trivial-game-main');

    for (const [index, question] of TRIVIAL_QUESTIONS.entries()) { 

        const questionCard = document.createElement('div');
        questionCard.classList.add('question-card');
        questionContainer.appendChild(questionCard);

        if(index === 0) {
            questionCard.classList.add('active');
        }

        const questionCardHeaderContainer = document.createElement('div');
        questionCardHeaderContainer.classList.add('question-card-header');
        questionCard.appendChild(questionCardHeaderContainer);
        
        const questionCardHeader = document.createElement('h4');
        questionCardHeader.innerHTML = question.question;
        questionCardHeaderContainer.appendChild(questionCardHeader);

        const questionAnswersContainer = document.createElement('div');
        questionAnswersContainer.classList.add('question-card-body');
        questionCard.appendChild(questionAnswersContainer);

        const answersList = document.createElement('ul');
        answersList.classList.add('answers-list');
        answersList.id = `question-${question.id}`
        questionAnswersContainer.appendChild(answersList);

        for (const answer of question.options) {
            const answerItem = document.createElement('li');
            answersList.appendChild(answerItem);
            answerItem.innerHTML = answer;

        } 

    }

    container.appendChild(questionContainer);
}