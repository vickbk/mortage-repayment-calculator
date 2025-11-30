import { Heading } from "../../shared/Heading";
import { InputWithDetails } from "./InputWithDetails";
import { MortageType } from "./MortageType";

export const CalculatorForm = ({
  calculateAction,
}: {
  calculateAction: (data: FormData) => void;
}) => {
  return (
    <form className="p-8 grid gap-8" action={calculateAction}>
      <Heading className="text-4xl font-bold">Mortage Calculator</Heading>
      <button
        className="place-self-start underline decoration-dotted"
        type="reset"
      >
        Clear All
      </button>
      <InputWithDetails label="Mortage Amount" name="amount" detail="#" />
      <div className="grid gap-4">
        <InputWithDetails
          label="Mortage Term"
          name="term"
          detail="years"
          toRight
        />
        <InputWithDetails
          label="Interest Rate"
          name="rate"
          detail="%"
          toRight
        />
      </div>
      <div className="grid gap-4">
        Mortage Type
        <MortageType value="repayment" text="Repayment" />
        <MortageType value="interest" text="Interest Only" />
      </div>
      <button
        className="flex justify-center gap-4 p-4 rounded-x-full font-bold lime"
        type="submit"
      >
        <img src="./assets/images/icon-calculator.svg" alt="" />
        Calculate Repayments
      </button>
    </form>
  );
};
