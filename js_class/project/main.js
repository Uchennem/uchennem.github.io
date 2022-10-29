//1.  Declare all vriables
// Query selector All returns an array like object. The Array from helps create
// an array from array like objects
 
  const squares = Array.from(document.querySelectorAll('.square'));
  const playerDisplay = document.querySelector('.display-player');
  const restartButton = document.querySelector('#restartButton');
  const winning_message = document.querySelector('.winning-message');


//2. Variables for game playing
// Board represents The game board


  // stores indexes gotten from player clicks  
  let board = ['', '', '', '', '', '', '', '', ''];
  
  let currentPlayer = 'X';
  let isGameActive = true;

  const PLAYERX_WON = 'PLAYERX_WON';
  const PLAYERO_WON = 'PLAYERO_WON';
  const TIE = 'TIE';


// an array of winning indexes. It follow the 3 * 3 tic-tac-toe squares
  const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
  ];


//6. Checks for a winner by looping true winning conditions
// For every sub array(in the board) that contains 3 numbs it checks if they have the same character for the indexes
// Skip empty squares. 



  function handleResultValidation() {
      let roundWon = false;
      for (let i = 0; i <= 7; i++) {
          const winCondition = winningConditions[i];
          const a = board[winCondition[0]];
          const b = board[winCondition[1]];
          const c = board[winCondition[2]];
          if (a === '' || b === '' || c === '') {
              continue;
          }
          if (a === b && b === c) {
              roundWon = true;
              break;
          }
      }

    if (roundWon) {
            announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
            isGameActive = false;
            return;
        }

    if (!board.includes(''))
        announce(TIE);
  }


//7 Announces a winner
//Modifies HTML
  const announce = (type) => {
      switch(type){
          case PLAYERO_WON:
              winning_message.innerHTML = 'Player O Won';
              break;
          case PLAYERX_WON:
              winning_message.innerHTML = 'Player X Won';
              break;
          case TIE:
              winning_message.innerText = 'Tie';
      }
      winning_message.classList.remove('hide');
  };


//8 if square is occupied. Enables player only play empty ties

  const isValidAction = (square) => {
      if (square.innerText === 'X' || square.innerText === 'O'){
          return false;
      }

      return true;
  };


  // updates Board from user input
  const updateBoard =  (index) => {
      board[index] = currentPlayer;
  }


// 5. updates the player
// removes current player and switches to the other player
// tenary operator ?
  const changePlayer = () => {
      playerDisplay.classList.remove(`player${currentPlayer}`);
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      playerDisplay.innerText = currentPlayer;
      playerDisplay.classList.add(`player${currentPlayer}`);
  }


// 4. Represents a turn in the game
// checks if action is Valid also checks whether game is Active
// if both conditions are true sets innertext to current player(X or O)
// Assigns player X or player O class 
  const userAction = (square, index) => {
      if(isValidAction(square) && isGameActive) {
          square.innerText = currentPlayer;
          square.classList.add(`player${currentPlayer}`);
          updateBoard(index);
          handleResultValidation();
          changePlayer();
        console.log(board);
      }
  }

  // 9 reset game state and board
  // clears all player entries, removes winning message
  
  const resetBoard = () => {
      board = ['', '', '', '', '', '', '', '', ''];
      isGameActive = true;
      winning_message.classList.add('hide');

      if (currentPlayer === 'O') {
          changePlayer();
      }

      squares.forEach(square => {
          square.innerText = '';
          square.classList.remove('playerX');
          square.classList.remove('playerO');
      });
  }

//3. Goes through the square array and attaches event listener to every square
//  This calls the userAction function with reference to square snd its index. 
//  square reference modifies UI and index updates in memory saved boards Array.

  squares.forEach( (square, index) => {
      square.addEventListener('click', () => userAction(square, index));
  });

  restartButton.addEventListener('click', resetBoard);


  const date = new Date("24/10/2021")
  const secondDate = new Date("07/11/2021")

days = date.setDate(date.getTime() - secondDate.getTime());
console.log(date.Now);
