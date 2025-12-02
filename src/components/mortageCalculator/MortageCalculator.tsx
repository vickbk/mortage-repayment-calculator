import { useActionState } from "react";
import { Article } from "../shared/Article";
import { CalculatorForm } from "./calculator/CalculatorForm";
import { Results } from "./results/Results";
import { calculateResults } from "../../actions/calculateResults";

export const MortageCalculator = () => {
  const [results, calculateAction] = useActionState(
    calculateResults,
    undefined
  );
  return (
    <Article className="grid md:grid-cols-2 max-w-300 md:my-8 md:rounded-3xl white">
      <CalculatorForm calculateAction={calculateAction} />
      <Results results={results} />
    </Article>
  );
};
