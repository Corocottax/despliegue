export const TicTacToeLogic = (currentPlayer = 'X') => {
    const N_BOARD = 3;
    let selectedPlayer = false;
    let userChoice = currentPlayer;
    let board =[
       ['','',''],
       ['','',''],
       ['','','']
    ]

    const players = document.querySelectorAll('.ttt-container .ttt-header .player-container');
    
    
    updatePlayerClass(currentPlayer);

    // Select initial player
    const selectPlayer = (player) => {
        if(!selectedPlayer) {
            currentPlayer = player.innerHTML;
            currentPlayer === 'X' ? player.classList.add('active-player-x') : player.classList.add('active-player-o');
            userChoice = currentPlayer;
            // Change text and style for the turn
            updatePlayerClass(currentPlayer);
            changeTurnText(currentPlayer);
            selectedPlayer = true;
        }
    }

    // Once the player is selected the user cannot select an other player
    if(selectedPlayer) {
        players.forEach(player => {
            player.removeEventListener('click', selectPlayer);
        })
    }

    // Add event listener for selecting a initial player
    players.forEach((player) => {
        player.addEventListener('click', () => selectPlayer(player));
    }); 

    // Add event listener to the grid
    const cells = document.querySelectorAll('.ttt-container .ttt-grid-container .ttt-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', () => handleMove(cell));
    });

    // Handle move
    const handleMove = (cell) => {
        const row = cell.dataset.row;
        const col = cell.dataset.col;

        if(board[row][col] ===  '' && !checkWin()) {
            // Display the user move
            board[row][col] = currentPlayer;
            cell.innerHTML = currentPlayer;
            currentPlayer === 'X' ? cell.style.color = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color') : cell.style.color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
            // Check if one user win
            
            if(checkWin()){

                const winningCells = checkWin();
                if( winningCells ) highlighWinningCells(winningCells, currentPlayer);
                bannerResult(currentPlayer, checkWin());
                return;
            }

            // Check if the board is full and there is a draw!
            if(board.every(row => row.every(cell => cell !== ''))){
                bannerResult(currentPlayer, false);
            }
            // Change the player after a move
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';

            // Change text for the turn and the style
            changeTurnText(currentPlayer);
            updatePlayerClass(currentPlayer);
            
            computerMove();
        }
    }

    const computerMove = () => {
        
        if(!checkWin() && currentPlayer != userChoice) {
            setTimeout(() => {
                
                // Find empty cells
                    let emptyCell = [];
        
                    for(let i = 0; i < N_BOARD; i++) {
                        for(let j = 0; j < N_BOARD; j++) {
                            if(board[i][j] === ''){
                                emptyCell.push({row: i, col: j})
                            }
                        }
                    }
        
                    // Randomly select a cell for the computer
                    if(emptyCell.length) {
                        const randonIndex = Math.floor(Math.random() * emptyCell.length);
                        const {row, col} = emptyCell[randonIndex];
                        const cell = document.querySelector(`.ttt-container .ttt-grid-container .ttt-cell[data-row="${row}"][data-col="${col}"]`);
                        handleMove(cell);
                    }

                }, 500)
        }
    }


    const checkWin = () => {
        
        // Check for rows and columns
        for(let i=0; i < N_BOARD; i++) {
            
            if(checkLine([board[i][0], board[i][1], board[i][2]], currentPlayer)) {
                return [[i,0],[i,1], [i,2]]
            }

            if(checkLine([board[0][i], board[1][i], board[2][i]], currentPlayer)) {
                return [[0,i], [1,i], [2,i]];
            }
        } 

        // Check for primary and secondary diagonal

        if(checkLine([board[0][0], board[1][1], board[2][2]], currentPlayer)){
            return [[0,0], [1,1], [2,2]]
        } 

        if (checkLine([board[0][2], board[1][1], board[2][0]], currentPlayer) ){
            return [[0,2], [1,1], [2,0]]
        }  
        
        return null
    }

        // Remove bunner when restarting the game
        const bannerResultElement = document.querySelector('.ttt-container .ttt-grid-container .result-container');
        if(bannerResultElement) bannerResultElement.remove();
}

const checkLine =  (line, currentPlayer) =>  {
    return line.every(element => element === currentPlayer);
}

const changeTurnText = (currentPlayer) => {
    const title = document.querySelector('.ttt-container .ttt-header h4');
    title.innerHTML = `Turn of player ${currentPlayer}`;
}

const updatePlayerClass = (currentPlayer) => {
    const players = document.querySelectorAll('.ttt-container .ttt-header .player-container');
    players.forEach(player => {
        player.classList.remove('active-player-x', 'active-player-o');
        if (player.innerHTML === currentPlayer) {
            player.classList.add(`active-player-${currentPlayer.toLowerCase()}`);
        }
    });
}

const highlighWinningCells = (winningCells, currentPlayer) => {
    winningCells.forEach(winningCell => {
        const cell = document.querySelector(`.ttt-container .ttt-grid-container .ttt-cell[data-row="${winningCell[0]}"][data-col="${winningCell[1]}"]`);
        cell.style.backgroundColor = currentPlayer === 'X' ? getComputedStyle(document.documentElement).getPropertyValue('--secondary-color') : getComputedStyle(document.documentElement).getPropertyValue('--primary-color') ;
        cell.style.color = getComputedStyle(document.documentElement).getPropertyValue('--white-color') 
    })
}

const bannerResult = (currentPlayer, winner) => {
    
    const header = document.querySelector('.ttt-grid-container');
    
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result-container');

    const resultMessage = document.createElement('p');
    resultMessage.innerHTML = winner ? `The player ${currentPlayer} wins!!` : 'DRAW!!';

    if(winner) {
        currentPlayer === 'X' ?
            resultContainer.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color')
        :
            resultContainer.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color');
        
    } else {
        resultContainer.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color');
    }

    const restartGameButton = document.createElement('button');
    restartGameButton.classList.add('btn-restart');
    restartGameButton.innerHTML = 'Restart game'

    resultContainer.appendChild(resultMessage);
    resultContainer.appendChild(restartGameButton);

    restartGameButton.addEventListener('click', () => handleRestartGame(currentPlayer))

    header.appendChild(resultContainer);
}

const handleRestartGame = (currentPlayer) => {
    const cells = document.querySelectorAll('.ttt-container .ttt-grid-container .ttt-cell');
    cells.forEach(cell => {
        cell.innerHTML = '';
        cell.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--black-color');
    });
    currentPlayer = 'X';
    TicTacToeLogic(currentPlayer);
}
