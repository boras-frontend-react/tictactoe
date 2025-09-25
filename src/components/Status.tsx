import { useEffect, useState } from 'react';
import { RestartButton } from '@components';
import { getPlayerClass } from '@utils';

interface StatusProps {
  currentPlayer: string;
  winner: string | null;
  isDraw: boolean;
  onRestart: () => void;
}

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
    <div className="border-3 border-accent bg-secondary text-primary-content h-16 w-full sm:w-64 lg:w-72 text-center">
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d text-2xl sm:text-2xl ${
          showRestart ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center backface-hidden ">
          {winner ? (
            <>
              Congrats&nbsp;
              <span className="text-accent font-bold">{winner}</span>
              &nbsp;You win!
            </>
          ) : isDraw ? (
            <>It's ended in a draw.</>
          ) : (
            <>
              It's&nbsp;
              <span className={getPlayerClass(currentPlayer)}>
                {currentPlayer}
              </span>
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
