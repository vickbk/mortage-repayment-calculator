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
      <Heading>Your results</Heading>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <Article>
        <Heading>Your monthly {isInterest ? "interest" : "repayments"}</Heading>
        <p>${monthly.toFixed(2)}</p>
      </Article>
      <Article>
        <Heading>Total you will repay over the term</Heading>
        <p>${term.toFixed(2)}</p>
      </Article>
    </>
  );
};
