import { Heading } from "../../shared/Heading";
import { InputWithDetails } from "./InputWithDetails";
import { MortageType } from "./MortageType";

export const CalculatorForm = ({
  calculateAction,
}: {
  calculateAction: (data: FormData) => void;
}) => {
  return (
    <form action={calculateAction}>
      <Heading>Mortage Calculator</Heading>
      <button type="reset">Clear All</button>
      <InputWithDetails label="Mortage Amount" name="amount" detail="#" />
      <div>
        <InputWithDetails label="Mortage Term" name="term" detail="years" />
        <InputWithDetails label="Interest Rate" name="rate" detail="%" />
      </div>
      Mortage Type
      <MortageType value="repayment" text="Repayment" />
      <MortageType value="interest" text="Interest Only" />
      <button type="submit">
        <img src="./assets/images/icon-calculator.svg" alt="" />
        Calculate Repayments
      </button>
    </form>
  );
};
