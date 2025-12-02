import { useActionState } from "react";
import { Article } from "../shared/Article";
import { CalculatorForm } from "./calculator/CalculatorForm";
import { Results } from "./results/Results";
import { calculateResults } from "../../actions/calculateResults";

export const MortageCalculator = () => {
  const [results, calculateAction] = useActionState(calculateResults, false);
  return (
    <Article className="grid lg:grid-cols-2 max-w-300 md:m-8 md:rounded-3xl white">
      <CalculatorForm
        calculateAction={calculateAction}
        fields={results ? results.fields : undefined}
      />
      <Results results={(results && results.results) || undefined} />
    </Article>
  );
};
