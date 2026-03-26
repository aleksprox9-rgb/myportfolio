import type { Answers, State } from "@/modules/constructor/constructor.type";
import { ConstructorConfig } from "@/modules/constructor/constructor.data";
import { calculateResult } from "@/modules/constructor/utils/calculator";
import { buildMessage } from "@/modules/constructor/utils/messageBuilder";
import {
  clearState,
  loadState,
  saveState,
} from "@/modules/constructor/utils/storage";
import { useState, useEffect } from "react";

export function useConstructor() {
  const [initialData] = useState(() => loadState());

  const [step, setStep] = useState<State>(
    initialData && typeof initialData === "object" ? initialData.step : "start",
  );
  const [currentIndex, setCurrentIndex] = useState(
    initialData && typeof initialData === "object"
      ? initialData.currentIndex
      : 0,
  );
  const [answers, setAnswers] = useState<Answers>(
    initialData && typeof initialData === "object" ? initialData.answers : {},
  );

  useEffect(() => {
    saveState({ step, currentIndex, answers });
  }, [step, currentIndex, answers]);

  const currentQuestion = ConstructorConfig.questions[currentIndex];

  function selectAnswer(questionId: string, optionId: string) {
    setAnswers((prev) => {
      const q = ConstructorConfig.questions.find((q) => q.id === questionId)!;

      if (q.multiple) {
        const current = prev[questionId] || [];
        return {
          ...prev,
          [questionId]: current.includes(optionId)
            ? current.filter((id) => id !== optionId)
            : [...current, optionId],
        };
      }

      return {
        ...prev,
        [questionId]: [optionId],
      };
    });
  }

  function next() {
    if (currentIndex < ConstructorConfig.questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setStep("result");
    }
  }

  function back() {
    setCurrentIndex((i) => Math.max(0, i - 1));
  }

  function restart() {
    clearState();
    setAnswers({});
    setCurrentIndex(0);
    setStep("start");
  }

  const result = calculateResult(ConstructorConfig, answers);
  const message = buildMessage(ConstructorConfig, answers);

  return {
    step,
    setStep,
    currentQuestion,
    currentIndex,
    answers,
    selectAnswer,
    next,
    back,
    restart,
    result,
    message,
    total: ConstructorConfig.questions.length,
  };
}
