import type { Answers, IConstructorConfig } from "../constructor.type";
import { getSelectedOptions } from "./calculator";

export function buildMessage(
  config: IConstructorConfig,
  answers: Answers,
): string {
  const selectedOptions = getSelectedOptions(config, answers);

  return config.messageBuilder({ answers, selectedOptions }).join("\n");
}
