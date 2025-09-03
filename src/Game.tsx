import { useEffect, useState } from 'react';
import Square from './components/Square';

const INITIAL_GAME_STATE = ['', '', '', '', '', '', '', '', ''];
const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Game() {
  const [gameState, setGameState] = useState(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  useEffect(() => {
    if (gameState === INITIAL_GAME_STATE) {
      return;
    }

    const resetBoard = () => {
      setGameState(INITIAL_GAME_STATE);
      setCurrentPlayer('X');
    };

    const handleWin = (winner: string) => {
      window.alert(`Congrats player ${winner}! You are the winner!`);
      resetBoard();
    };

    const handleDraw = () => {
      window.alert('The game ended in a draw');
      resetBoard();
    };

    const changePlayer = () => {
      setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
    };

    const checkForWinner = () => {
      let roundWon = false;
      let winner: string | null = null;

      for (let i = 0; i < WINNING_COMBOS.length; i++) {
        const winCombo = WINNING_COMBOS[i];
        const a = gameState[winCombo[0]];
        const b = gameState[winCombo[1]];
        const c = gameState[winCombo[2]];

        if ([a, b, c].includes('')) {
          continue;
        }

        if (a === b && b === c) {
          roundWon = true;
          winner = a;
          break;
        }
      }

      if (roundWon && winner) {
        setTimeout(() => handleWin(winner!), 500);
        return;
      }

      if (!gameState.includes('')) {
        setTimeout(() => handleDraw(), 500);
        return;
      }

      changePlayer();
    };

    checkForWinner();
  }, [gameState]);

  const handleCellClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const cellIndex = Number(
      (event.target as HTMLDivElement).getAttribute('data-cell-index')
    );

    const currentValue = gameState[cellIndex];
    if (currentValue) {
      return;
    }

    const newValues = [...gameState];
    newValues[cellIndex] = currentPlayer;
    setGameState(newValues);
  };

  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-5xl mb-4 font-display text-white">
        Tic Tac Toe
      </h1>
      <div>
        <div className="grid grid-cols-3 gap-3 mx-auto w-96">
          {gameState.map((player, index) => (
            <Square
              key={index}
              onClick={handleCellClick}
              {...{ index, player }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Game;
