import { getPlayerClass } from '@utils';

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <div
      className="border-3 border-accent h-24 w-24 flex items-center justify-center text-4xl font-bold bg-neutral-content hover:bg-slate-100 cursor-pointer"
      onClick={onClick}
      data-testid="square"
    >
      <span className={getPlayerClass(value)}>{value}</span>
    </div>
  );
};

export default Square;
