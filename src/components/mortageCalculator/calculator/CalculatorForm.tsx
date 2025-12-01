import { Heading } from "../../shared/Heading";
import { AmountInput } from "./AmountInput";
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
      <AmountInput />
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
          step={0.01}
        />
      </div>
      <div className="grid gap-4">
        Mortage Type
        <MortageType value="repayment" text="Repayment" />
        <MortageType value="interest" text="Interest Only" />
      </div>
      <button
        className="flex justify-center gap-4 p-4 rounded-x-full font-bold lime transition-transform duration-300 active:scale-95 border-2 b-white out-lime  hover:outline-2 focus:scale-105 focus:outline-0"
        type="submit"
        style={{ "--bg-accent": 0.7 } as React.CSSProperties}
      >
        <img src="./assets/images/icon-calculator.svg" alt="" />
        Calculate Repayments
      </button>
    </form>
  );
};
