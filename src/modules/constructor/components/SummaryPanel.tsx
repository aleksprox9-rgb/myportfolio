type Props = {
  message: string;
};

export function SummaryPanel({ message }: Props) {
  return (
    <div className="p-4 bg-neutral-900 rounded text-sm whitespace-pre-line">
      {message}
    </div>
  );
}