type Props = {
  onStart: () => void;
};

export function StartScreen({ onStart }: Props) {
  return (
    <div className="text-center space-y-4">
      <h1 className="text-2xl font-bold">Конструктор проекта</h1>
      <button
        onClick={onStart}
        className="px-4 py-2 bg-white text-black rounded"
      >
        Начать
      </button>
    </div>
  );
}