import { useState } from 'react';
import Board from './components/Board';
import Status from './components/Status';
import COPYRIGHT from '../.copyright';

const INITIAL_GAME_STATE = Array(9).fill('');
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
    for (const [a, b, c] of WINNING_COMBOS) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const handleCellClick = (index: number) => {
    if (winner || isDraw || gameState[index]) return;
    const newBoard = [...gameState];
    newBoard[index] = currentPlayer;
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
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-green-800 to-green-500">
      <h1 className="text-center text-5xl font-display text-white pt-8">
        Tic Tac Toe
      </h1>
      <main className="flex-1 flex flex-col items-center justify-center">
        <Board squares={gameState} onCellClick={handleCellClick} />
        <Status
          currentPlayer={currentPlayer}
          winner={winner}
          isDraw={isDraw}
          onRestart={resetBoard}
        />
      </main>
      <footer className="text-center text-sm bg-gradient-to-r from-emerald-900 to-green-900 p-2">
        {COPYRIGHT}
      </footer>
    </div>
  );
}

export default Game;
