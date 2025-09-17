interface RestartButtonProps {
  show: boolean;
  onClick: () => void;
}

export default function RestartButton({ show, onClick }: RestartButtonProps) {
  if (!show) return null;
  return (
    <div className="flex flex-col items-center text-2xl text-white">
      <button onClick={onClick} className="px-6 py-2 hover:text-yellow-400">
        Try Again?
      </button>
    </div>
  );
}
