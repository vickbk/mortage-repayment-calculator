import { Heading } from "../../shared/Heading";
import { InputWithDetails } from "./InputWithDetails";
import { MortageType } from "./MortageType";

export const CalculatorForm = () => {
  return (
    <form>
      <Heading>Mortage Calculator</Heading>
      <button type="reset">Clear All</button>
      <InputWithDetails />
      <div>
        <InputWithDetails />
        <InputWithDetails />
      </div>
      Mortage Type
      <MortageType />
      <MortageType />
      <button type="submit">
        <img src="./assets/images/icon-calculator.svg" alt="" />
        Calculate Repayments
      </button>
    </form>
  );
};
