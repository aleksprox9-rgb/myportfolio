import type { Answers, Option } from "../constructor.type";

export function isOptionVisible(option: Option, answers: Answers): boolean {
  if (!option.visibleIf) return true;

  const selected = answers[option.visibleIf.questionId] || [];

  return option.visibleIf.includes.some((id) => selected.includes(id));
}
