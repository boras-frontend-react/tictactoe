import { Square } from '@components';

interface BoardProps {
  squares: string[];
  onCellClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onCellClick }) => (
  <div className="grid grid-cols-3 gap-3 w-max mx-auto mb-14">
    {squares.map((value, idx) => (
      <Square key={idx} value={value} onClick={() => onCellClick(idx)} />
    ))}
  </div>
);

export default Board;
