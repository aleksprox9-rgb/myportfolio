import { useTranslation } from "react-i18next";
import type { Answers, Question } from "../constructor.type";
import { isOptionVisible } from "../utils/visibility";
import { ConstructorConfig } from '../constructor.data';

type Props = {
  question: Question;
  answers: Answers;
  onSelect: (id: string) => void;
};

export function QuestionStep({ question, answers, onSelect }: Props) {
  const { t } = useTranslation(undefined, {
    keyPrefix: ConstructorConfig.path
  });
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{t(`questions.${question.id}`)}</h2>

      <div className="grid gap-2">
        {question.options
          .filter((o) => isOptionVisible(o, answers))
          .map((o) => {
            const active = answers[question.id]?.includes(o.id);

            return (
              <button
                key={o.id}
                onClick={() => onSelect(o.id)}
                className={`rounded border p-3 ${
                  active ? "bg-white text-black" : "bg-neutral-800"
                }`}
              >
                {t(`options.${o.id}.label`)}
              </button>
            );
          })}
      </div>
    </div>
  );
}
