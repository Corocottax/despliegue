import './TicTacToe.css';
export const TicTacToe = () => {

    const container = document.createElement('div');
    container.classList.add('ttt-container');

    createHeader(container);
    createGrid(container);

    return container.outerHTML;
}

const createHeader = (container) => {
    
    const header = document.createElement('div');
    header.classList.add('ttt-header');

    const playersContainer = document.createElement('div');
    playersContainer.classList.add('players-container');

    const xContainer = document.createElement('div');
    xContainer.classList.add('player-container', 'x-player', 'active-player-x');
    xContainer.innerHTML = 'X';
    playersContainer.appendChild(xContainer);

    const oContainer = document.createElement('div');
    oContainer.classList.add('player-container', 'o-player');
    oContainer.innerHTML = 'O';
    playersContainer.appendChild(oContainer);

    const title = document.createElement('h4');
    title.innerHTML = 'Choose a player or start a game';

    header.appendChild(playersContainer);
    header.appendChild(title);

    container.appendChild(header);
}

const createGrid = (container) => {

    const gridContainer = document.createElement('div');
    gridContainer.classList.add('ttt-grid-container');

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++) {
            const cell = document.createElement('div');
            cell.classList.add('ttt-cell');
            cell.dataset.row = i;
            cell.dataset.col = j;
            gridContainer.appendChild(cell);
        }
    }
    
    container.appendChild(gridContainer);
    
}