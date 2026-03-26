type Props = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: Props) {
  const percent = (current / total) * 100;

  return (
    <div className="w-full h-2 bg-neutral-700 rounded">
      <div
        className="h-2 bg-white rounded transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}