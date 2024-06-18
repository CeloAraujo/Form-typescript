import { ReactElement, FormEvent, useState } from "react";

export function useForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  function changeStep(i: number, e?: FormEvent) {
    if (e) e.preventDefault();
    if (i < 0 || i >= steps.length) return;

    setCurrentStep(i);
  }

  return {
    changeStep,
    currentComponent: steps[currentStep],
    currentStep,
  };
}
