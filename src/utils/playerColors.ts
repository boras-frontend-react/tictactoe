export function getPlayerClass(player: string): string {
  if (player === 'X') return 'text-primary';
  if (player === 'O') return 'text-neutral';
  return '';
}
