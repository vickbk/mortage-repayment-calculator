import { Article } from "../shared/Article";
import { CalculatorForm } from "./calculator/CalculatorForm";
import { Results } from "./results/Results";

export const MortageCalculator = () => {
  return (
    <Article>
      <CalculatorForm />
      <Results />
    </Article>
  );
};
