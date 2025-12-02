import { currencyToNumber } from "../libs/currencyFormatter";
import type { ResultsType } from "../libs/results";

export const calculateResults = (_: unknown, data: FormData) => {
  const { amount, term, rate, type } = Object.fromEntries(data) as {
    amount: string;
    term: string;
    rate: string;
    type: "interest" | "repayment";
  };
  if ([amount, term, rate, type].some((field) => !field)) return false;
  const principal = currencyToNumber({ amount });
  const interestRate = getMonthlyInterestRate(+rate);
  const n = getNumberOfPayments(+term);
  const mortage = getMortage({ principal, interestRate, n });
  const interest = getMonthlyInterest({ principal, interestRate });

  const totalPayment = getTotalPayment({ mortage, n });
  const isInterest = type === "interest";

  return {
    fields: { amount, term, rate, type },
    results: {
      monthly: isInterest ? interest : mortage,
      term: totalPayment,
      isInterest,
    } as ResultsType,
  };
};

const getMonthlyInterestRate = (rate: number) => rate / 12 / 100;
const getNumberOfPayments = (term: number) => term * 12;
const getMortage = ({
  principal,
  interestRate,
  n,
}: Record<"principal" | "interestRate" | "n", number>) =>
  (principal * (interestRate * Math.pow(1 + interestRate, n))) /
  (Math.pow(1 + interestRate, n) - 1);

const getMonthlyInterest = ({
  principal,
  interestRate,
}: Record<"principal" | "interestRate", number>) => principal * interestRate;

const getTotalPayment = ({ mortage, n }: Record<"mortage" | "n", number>) =>
  mortage * n;
