import { useState } from 'react';
import Board from './components/Board';

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
  const [winner, setWinner] = useState<string | null>(null);
  const [isDraw, setIsDraw] = useState(false);

  const resetBoard = () => {
    setGameState(INITIAL_GAME_STATE);
    setCurrentPlayer('X');
    setWinner(null);
    setIsDraw(false);
  };

  const checkForWinner = (board: string[]): string | null => {
    for (let i = 0; i < WINNING_COMBOS.length; i++) {
      const [a, b, c] = WINNING_COMBOS[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleCellClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (winner || isDraw) return; // Prevent moves after game over

    const cellIndex = Number(
      (event.target as HTMLDivElement).getAttribute('data-cell-index')
    );
    if (gameState[cellIndex]) return;

    const newBoard = [...gameState];
    newBoard[cellIndex] = currentPlayer;

    const win = checkForWinner(newBoard);
    if (win) {
      setGameState(newBoard);
      setWinner(win);
      return;
    }

    if (!newBoard.includes('')) {
      setGameState(newBoard);
      setIsDraw(true);
      return;
    }

    setGameState(newBoard);
    setCurrentPlayer((prev) => (prev === 'X' ? 'O' : 'X'));
  };

  return (
    <div className="h-full p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center text-5xl mb-4 font-display text-white">
        Tic Tac Toe
      </h1>
      <div>
        <div className="grid grid-cols-3 gap-3 mx-auto w-96">
          {gameState.map((player, index) => (
            <Board
              key={index}
              onClick={handleCellClick}
              index={index}
              player={player}
            />
          ))}
        </div>
        {(winner || isDraw) && (
          <div className="mt-8 flex flex-col items-center">
            <div className="text-2xl mb-4 text-white">
              {winner
                ? `Congrats player ${winner}! You are the winner!`
                : 'The game ended in a draw.'}
            </div>
            <button
              onClick={resetBoard}
              className="px-6 py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-blue-100"
            >
              Try Again?
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
