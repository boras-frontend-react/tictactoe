import { useState } from 'react';
import { Board, Status } from '@components';
import { checkWinner } from '@utils';
import type { GameState, Player } from '@types';

const INITIAL_GAME_STATE: GameState = Array(9).fill('');

function Game() {
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | null>(null);
  const [isDraw, setIsDraw] = useState(false);

  const resetBoard = () => {
    setGameState(INITIAL_GAME_STATE);
    setCurrentPlayer('X');
    setWinner(null);
    setIsDraw(false);
  };

  const handleCellClick = (index: number) => {
    if (winner || isDraw || gameState[index]) return;
    const newBoard = [...gameState];
    newBoard[index] = currentPlayer;
    const win = checkWinner(newBoard);
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
    <div className="w-full flex flex-col items-center px-4 pb-8 pt-8 max-w-xl mx-auto">
      <h1 className="text-center text-4xl sm:text-5xl font-display text-white mb-8">
        Tic Tac Toe
      </h1>
      <Board squares={gameState} onCellClick={handleCellClick} />
      <div className="mt-8 w-full">
        <Status
          currentPlayer={currentPlayer}
          winner={winner}
          isDraw={isDraw}
          onRestart={resetBoard}
        />
      </div>
    </div>
  );
}

export default Game;
