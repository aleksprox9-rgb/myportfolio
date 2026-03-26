import type { Answers, ConstructorConfig } from "../constructor.type";
import { getSelectedOptions } from "./calculator";

export function buildMessage(
  config: ConstructorConfig,
  answers: Answers,
): string {
  const selectedOptions = getSelectedOptions(config, answers);

  return config.messageBuilder({ answers, selectedOptions }).join("\n");
}
