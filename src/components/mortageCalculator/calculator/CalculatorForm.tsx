import { startTransition, useState } from "react";
import { Heading } from "../../shared/Heading";
import { AmountInput } from "./AmountInput";
import { InputWithDetails } from "./InputWithDetails";
import { MortageType } from "./MortageType";

export const CalculatorForm = ({
  calculateAction,
  fields: { term, rate, type } = { term: "", rate: "", type: "" },
}: {
  calculateAction: (data: FormData) => void;
  fields?: { term: string; rate: string; type: "interest" | "repayment" | "" };
}) => {
  const [amount, setAmount] = useState("");
  const resetForm = () => {
    setAmount("");
    startTransition(() => calculateAction(new FormData()));
  };

  return (
    <form
      className="p-8 grid gap-8 lg:px-12"
      action={calculateAction}
      onReset={resetForm}
    >
      <div className="flex flex-wrap gap-4 justify-between items-center">
        <Heading className="text-4xl font-bold">Mortage Calculator</Heading>
        <button className=" underline decoration-dotted" type="reset">
          Clear All
        </button>
      </div>
      <AmountInput amount={amount} setAmount={setAmount} />
      <div className="grid gap-4">
        <InputWithDetails
          label="Mortage Term"
          name="term"
          detail="years"
          toRight
          defaultValue={term}
        />
        <InputWithDetails
          label="Interest Rate"
          name="rate"
          detail="%"
          toRight
          step={0.01}
          defaultValue={rate}
        />
      </div>
      <div className="grid gap-4">
        Mortage Type
        <MortageType
          value="repayment"
          text="Repayment"
          defaultChecked={type === "repayment"}
        />
        <MortageType
          value="interest"
          text="Interest Only"
          defaultChecked={type === "interest"}
        />
      </div>
      <button
        className="flex justify-center gap-4 p-4 rounded-x-full font-bold lime transition-transform duration-300 active:scale-95 border-2 b-white out-lime  hover:outline-2 focus:scale-105 focus:outline-0 md:place-self-start md:px-12"
        type="submit"
      >
        <img src="./assets/images/icon-calculator.svg" alt="" />
        Calculate Repayments
      </button>
    </form>
  );
};
