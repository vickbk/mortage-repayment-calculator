import { useState } from "react";
import { InputWithDetails } from "./InputWithDetails";
import { currencyFormatter } from "../../../libs/currencyFormatter";

export const AmountInput = () => {
  const [amount, setAmount] = useState("");
  const beautifyAmount = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const amount = +value.replaceAll(",", "");
    if (isNaN(amount)) return;
    const moneyFormated = currencyFormatter({ amount });
    const dotIndex = value.indexOf(".");
    setAmount(
      moneyFormated.substring(
        1,
        dotIndex !== -1
          ? moneyFormated.length + value.length - dotIndex - 3
          : moneyFormated.indexOf(".")
      )
    );
  };
  return (
    <InputWithDetails label="Mortage Amount" name="amount" detail="£">
      <input
        className={`border detailed__input p-4 rounded-lg ${"pl-12"}`}
        type="text"
        name={"amount"}
        placeholder=""
        required
        value={amount}
        onChange={beautifyAmount}
      />
    </InputWithDetails>
  );
};
