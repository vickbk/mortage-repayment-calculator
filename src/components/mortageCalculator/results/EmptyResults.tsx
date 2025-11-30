import { Heading } from "../../shared/Heading";

export const EmptyResults = () => {
  return (
    <>
      <img
        src="/public/assets/images/illustration-empty.svg"
        alt="Empty results"
      />
      <Heading>Results shown here</Heading>
      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </>
  );
};
