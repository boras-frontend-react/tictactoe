interface RestartButtonProps {
  show: boolean;
  onClick: () => void;
}

export default function RestartButton({ show, onClick }: RestartButtonProps) {
  if (!show) return null;
  return (
    <div className="text-center text-2xl w-full h-full">
      <button
        onClick={onClick}
        className="hover:bg-neutral-content w-full h-full"
      >
        Try Again?
      </button>
    </div>
  );
}
