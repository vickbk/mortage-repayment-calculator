import type { ResultsType } from "../../../libs/results";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";

export const CalculatedResults = ({
  monthly,
  term,
  isInterest,
}: ResultsType) => {
  return (
    <>
      <Heading className="place-self-start text-2xl font-semibold">
        Your results
      </Heading>
      <p className="c-slate-300">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="c-slate-300 slate-950 rounded-lg p-4 border-t-6 b-lime">
        <Article>
          <Heading>
            Your monthly {isInterest ? "interest" : "repayments"}
          </Heading>
          <p className="c-lime text-3xl font-bold py-4 border-b">
            ${monthly.toFixed(2)}
          </p>
        </Article>
        <Article>
          <Heading className="py-4">Total you will repay over the term</Heading>
          <p className="text-2xl font-bold c-white">${term.toFixed(2)}</p>
        </Article>
      </div>
    </>
  );
};
