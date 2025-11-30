import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";

export const CalculatedResults = () => {
  return (
    <Article>
      <Heading>Your results</Heading>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <Article>
        <Heading>Your monthly repayments</Heading>
        <p>$1,787.32</p>
      </Article>
      <Article>
        <Heading>Total you will repay over the term</Heading>
        <p>$323,434.94</p>
      </Article>
    </Article>
  );
};
