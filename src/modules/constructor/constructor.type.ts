export type State = "start" | "questions" | "result";

export type Weights = {
  price: number;
  time: number;
};

export type VisibilityCondition = {
  questionId: string;
  includes: string[];
};

export type Option = {
  id: string;
  weights: Weights;
  visibleIf?: VisibilityCondition;
};

export type Question = {
  id: string;
  multiple: boolean;
  options: Option[];
};

export type Answers = Record<string, string[]>;

export type IConstructorConfig = {
  path: string,
  questions: Question[];
  calculator: {
    price: (answers: Answers) => number;
    time: (answers: Answers) => number;
  };
  messageBuilder: (ctx: {
    answers: Answers;
    selectedOptions: Option[];
  }) => string[];
};
