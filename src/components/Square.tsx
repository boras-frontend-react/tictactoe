import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function Square({ children }) {
  return (
    <div className="h-36 border-solid border-4 border-slate-200 font-display text-center flex text-7xl justify-center items-center cursor-pointer">
      <span>{children}</span>
    </div>
  );
}

export default Square;
