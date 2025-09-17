import { useEffect, useState } from 'react';
import RestartButton from './RestartButton';

interface StatusProps {
  currentPlayer: string;
  winner: string | null;
  isDraw: boolean;
  onRestart: () => void;
}

const box =
  'w-72 h-20 mx-auto flex items-center justify-center perspective-600 bg-black rounded shadow-lg text-white text-xl';

export default function Status({
  currentPlayer,
  winner,
  isDraw,
  onRestart,
}: StatusProps) {
  const [showRestart, setShowRestart] = useState(false);

  useEffect(() => {
    if (winner || isDraw) {
      setShowRestart(false);
      const timer = setTimeout(() => setShowRestart(true), 1500);
      return () => clearTimeout(timer);
    } else {
      setShowRestart(false);
    }
  }, [winner, isDraw]);

  return (
    <div className={box}>
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d ${
          showRestart ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center backface-hidden ">
          {winner ? (
            <>
              Congrats&nbsp;
              <span className="text-yellow-400 font-bold">{winner}</span>
              &nbsp;You win!
            </>
          ) : isDraw ? (
            <>It's ended in a draw.</>
          ) : (
            <>
              It's&nbsp;
              <span className="text-yellow-400 font-bold">{currentPlayer}</span>
              &nbsp;Turn
            </>
          )}
        </div>

        <div className="absolute inset-0 flex items-center justify-center backface-hidden rotate-y-180">
          <RestartButton show onClick={onRestart} />
        </div>
      </div>
    </div>
  );
}
