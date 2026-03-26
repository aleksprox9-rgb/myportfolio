import { useState } from "react";

type Props = {
  message: string;
  price: number;
  time: number;
  onRestart: () => void;
};

export function ResultScreen({
  message,
  price,
  time,
  onRestart,
}: Props) {
  const [value, setValue] = useState(message);

  return (
    <div className="space-y-4">
      <textarea
        className="w-full h-40 p-3 bg-neutral-900 rounded"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button
        onClick={() => setValue(message)}
        className="text-sm underline"
      >
        Восстановить
      </button>

      <div>
        <p>Стоимость: ~{price}€</p>
        <p>Срок: ~{time} дней</p>
      </div>

      <button
        onClick={onRestart}
        className="px-4 py-2 bg-white text-black rounded"
      >
        Пройти заново
      </button>
    </div>
  );
}