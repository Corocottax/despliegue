import './Wordle.css';

export const Wordle = () => {

    const container = document.createElement('div');
    container.classList.add('wordle-container');
    
    const containerGuess = document.createElement('div');
    containerGuess.classList.add('guess-container');
    
    const form = document.createElement('form');
    form.id = "guess-form";

    container.appendChild(containerGuess);
    container.appendChild(form);
    
    createGuessResults(containerGuess);
    createFormInputGuess(form);

    return container.outerHTML;
}

const createFormInputGuess = (form) => {
    
    const label = document.createElement('label');
    label.htmlFor = 'guess-input';
    label.innerText = 'Enter Guess:';

    const input = document.createElement('input');
    input.id = 'guess-input';
    input.type = 'text';
    input.required = true;
    input.minLength = 1;
    input.maxLength = 5;
    input.pattern = "[a-zA-Z]{5}"

    form.appendChild(label);
    form.appendChild(input);
}

export const createGuessResults = (containerGuess) => {

    for(let i = 0; i < 6; i++) {
        const row = document.createElement('p');
        row.classList.add('row');

        for(let j = 0; j < 5; j++) {
            const cell = document.createElement('span');
            cell.classList.add('cell');
            row.appendChild(cell);
        }

        containerGuess.appendChild(row);

    }
}
