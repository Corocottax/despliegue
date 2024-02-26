export const GAMES = [
    {
        id: 1,
        name: 'Tic Tac Toe',
        path: 'tic-tac-toe',
        imgUrl: 'https://res.cloudinary.com/dmrv2bogq/image/upload/v1703022016/games-hub/tic-tac-toe_ballzc.jpg',
        rules: [
            "The game is played on a 3x3 grid.",
            "Two players take turns marking an empty cell with their symbol (X or O).",
            "The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins.",
            "If the entire grid is filled without any player achieving three in a row, the game is a draw.",
            "Players cannot overwrite each other's marks once a cell is occupied.",
            "The game alternates between players, with one making a move at a time.",
            "The center cell is often considered strategically important.",
            "Players can win by having three of their symbols in a row in the horizontal, vertical, or diagonal direction.",
            "The game ends as soon as one player wins or when it is a draw.",
            "The starting player (X or O) is often determined by a coin toss or other random method."
        ]
    },
    {
        id: 2,
        name: 'Memory Game',
        path: 'memory-game',
        imgUrl: 'https://res.cloudinary.com/dmrv2bogq/image/upload/v1703022016/games-hub/memory-game_l87g5n.jpg',
        rules : [
            "The game consists of a set of matching pairs of cards.",
            "All cards are initially placed face down in a grid.",
            "Players take turns flipping over two cards at a time.",
            "If the two flipped cards match, the player keeps the pair and gets another turn.",
            "If the two flipped cards do not match, they are turned face down again, and it becomes the next player's turn.",
            "The goal is to match all pairs of cards by remembering their positions on the grid.",
            "The game ends when all pairs have been successfully matched.",
            "Players may use their memory to recall the positions of previously flipped cards.",
            "The player with the most matched pairs at the end of the game wins.",
            "Variations may include a time limit, point scoring, or additional rules to increase complexity."
        ]
    },
    {
        id: 3,
        name: 'Wordle',
        path: 'wordle',
        imgUrl: 'https://res.cloudinary.com/dmrv2bogq/image/upload/v1703022015/games-hub/joshua-hoehne-b4wTzWmwGE0-unsplash_jshem9.jpg', 
        rules: [
            "Wordle is a word puzzle game where players try to guess a secret word within a certain number of attempts.",
            "The secret word is typically a five-letter word, and the player's objective is to guess it correctly.",
            "Players make guesses, and after each guess, the game provides feedback on the guessed word.",
            "Feedback usually consists of colored tiles or other indicators to show correct letters in the correct position and correct letters in the wrong position.",
            "Players use the feedback to refine their guesses and deduce the secret word.",
            "The game continues until the player correctly guesses the secret word or reaches the maximum allowed number of attempts.",
            "Wordle often involves strategy and deduction to narrow down possibilities and guess the word efficiently.",
            "Variations of Wordle may have different rules or additional features, but the core concept involves guessing the secret word within a limited number of attempts."
        ]
    },
/*     {
        id: 4,
        name: 'Rock Paper Scissors',
        path: 'rock-paper-scissors',
        imgUrl: 'https://res.cloudinary.com/dmrv2bogq/image/upload/v1703022016/games-hub/rock-paper-scissors_ms7dbe.jpg',
        rules: [
            "Rock, Paper, Scissors is a hand game typically played between two people.",
            "Each player simultaneously forms one of three shapes with their hand: rock, paper, or scissors.",
            "The game has three possible outcomes for each round: rock crushes scissors, scissors cuts paper, and paper covers rock.",
            "If both players choose the same shape, the game is a tie and is often replayed.",
            "The game is usually played in a series of rounds, and the player with the most wins at the end is the overall winner.",
            "The simplicity of the game makes it a popular choice for a quick decision-making activity.",
            "Rock beats scissors, scissors beat paper, and paper beats rock.",
            "The game may have additional variations, such as lizard and Spock, to add complexity and more possible outcomes.",
            "Rock, Paper, Scissors is often used as a fair way to make a decision between two people."
        ]
    }, */
  /*   {
        id: 5,
        name: 'Whac A Mole',
        path: 'whac-a-mole',
        imgUrl: 'https://res.cloudinary.com/dmrv2bogq/image/upload/v1703022016/games-hub/whac-a-mole_asu8kc.jpg',
        rules: [
            "Whac-A-Mole is an arcade game where the objective is to hit as many moles as possible that randomly pop up from holes.",
            "The game typically consists of a game board with several holes, and each hole corresponds to a mole's potential location.",
            "Moles appear randomly and quickly from the holes, and the player's task is to hit them with a mallet before they disappear.",
            "Players score points for each successfully whacked mole.",
            "The game is fast-paced, and players need quick reflexes to score high.",
            "Whac-A-Mole may have a time limit or a set number of rounds.",
            "Some moles may be worth more points than others, adding a strategic element to the game.",
            "Players may incur penalties for hitting a non-mole target, such as a bomb or penalty object.",
            "The player with the highest score at the end of the game is the winner.",
            "Whac-A-Mole is often enjoyed for its simple yet entertaining gameplay and is a test of hand-eye coordination."
        ]
    }, */
/*     {
        id: 6,
        name: 'Sudoku',
        path: 'sudoku',
        imgUrl: 'https://res.cloudinary.com/dmrv2bogq/image/upload/v1703022016/games-hub/sudoku_ow367i.jpg',
        rules: [
            "Sudoku is a number-placement puzzle played on a 9x9 grid.",
            "The grid is divided into 3x3 subgrids called regions or boxes.",
            "The objective is to fill in the grid with digits from 1 to 9, ensuring that each row, each column, and each 3x3 region contains all the digits from 1 to 9 without repetition.",
            "The puzzle starts with some cells pre-filled with numbers, and the player's task is to complete the grid.",
            "Digits in a row or column must not repeat, and each digit must appear exactly once in each region.",
            "Players solve Sudoku puzzles through logical deduction and elimination, without guesswork.",
            "The difficulty of Sudoku puzzles varies, and harder puzzles may require advanced solving techniques.",
            "Sudoku puzzles have a unique solution that can be reached through logical deduction.",
            "The game is considered solved when the entire grid is filled correctly according to the rules.",
            "Sudoku is a popular single-player game that tests pattern recognition, logical reasoning, and attention to detail."
        ]
    }, */
    {
        id: 7,
        name: 'Trivial',
        path: 'trivial',
        imgUrl: 'https://res.cloudinary.com/dmrv2bogq/image/upload/v1703022016/games-hub/trivial_c9gpzh.jpg',
        rules: [
            "Trivial is a trivia board game played by two or more players or teams.",
            "The game includes a game board, question cards, and player tokens.",
            "Players or teams advance around the board by correctly answering trivia questions from various categories.",
            "The categories often include topics like history, geography, science, entertainment, art, and sports.",
            "To win, a player or team must collect a pie piece from each category by correctly answering a question in each category.",
            "Players or teams may land on special spaces that allow them to roll again, choose a category, or challenge opponents.",
            "Incorrect answers may result in the player or team losing a turn or facing a penalty.",
            "The game continues until a player or team collects all the pie pieces and correctly answers a final question to win the game.",
            "Trivial is known for its diverse range of questions and is a test of general knowledge across various subjects.",
            "There are various editions and versions of Trivial, each with its own set of questions and categories."
        ]
    },

]