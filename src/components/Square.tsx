import React from 'react';

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  let valueClass = '';
  if (value === 'X') valueClass = 'text-red-500';
  else if (value === 'O') valueClass = 'text-blue-500';

  return (
    <div
      className="border-2 h-24 w-24 flex items-center justify-center text-4xl font-bold bg-white hover:bg-slate-100 cursor-pointer"
      onClick={onClick}
      data-testid="square"
    >
      {/* Only the X or O gets the color */}
      <span className={valueClass}>{value}</span>
    </div>
  );
};

export default Square;
