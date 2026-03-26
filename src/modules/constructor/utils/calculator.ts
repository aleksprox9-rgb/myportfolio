import type { Answers, IConstructorConfig, Option } from "../constructor.type";

export function getSelectedOptions(
  config: IConstructorConfig,
  answers: Answers,
): Option[] {
  return config.questions.flatMap((q) =>
    q.options.filter((o) => answers[q.id]?.includes(o.id)),
  );
}

export function calculateResult(config: IConstructorConfig, answers: Answers) {
  return {
    price: config.calculator.price(answers),
    time: config.calculator.time(answers),
  };
}
