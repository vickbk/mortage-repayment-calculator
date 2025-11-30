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
    <Article>
      <CalculatorForm calculateAction={calculateAction} />
      <Results results={results} />
    </Article>
  );
};
