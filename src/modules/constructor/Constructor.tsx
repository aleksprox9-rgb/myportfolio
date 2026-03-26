import { useConstructor } from "@/hooks/useConstructor";
import { StartScreen } from "./components/StartScreen";
import { ResultScreen } from "./components/ResultScreen";
import { ProgressBar } from "./components/ProgressBar";
import { QuestionStep } from "./components/QuestionStep";
import { SummaryPanel } from "./components/SummaryPanel";
import { useTranslation } from "react-i18next";
import { ConstructorConfig } from "./constructor.data";

export function Constructor() {
  const { t } = useTranslation(undefined, {
    keyPrefix: ConstructorConfig.path,
  });
  const c = useConstructor();

  if (c.step === "start") {
    return <StartScreen onStart={() => c.setStep("questions")} />;
  }

  if (c.step === "result") {
    return (
      <ResultScreen
        message={c.message}
        price={c.result.price}
        time={c.result.time}
        onRestart={c.restart}
      />
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <ProgressBar
          current={c.currentIndex + 1}
          total={c.total}
        />

        <QuestionStep
          question={c.currentQuestion}
          answers={c.answers}
          onSelect={(id) => c.selectAnswer(c.currentQuestion.id, id)}
        />

        <div className="flex gap-2">
          <button onClick={c.back}>{t("buttons.back")}</button>
          <button onClick={c.next}>{t("buttons.next")}</button>
        </div>
      </div>

      <SummaryPanel message={c.message} />
    </div>
  );
}
