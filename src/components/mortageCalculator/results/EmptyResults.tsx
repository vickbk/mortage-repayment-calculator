import { Heading } from "../../shared/Heading";

export const EmptyResults = () => {
  return (
    <article className="grid gap-4 justify-items-center">
      <img src="./assets/images/illustration-empty.svg" alt="Empty results" />
      <Heading className="text-2xl font-semibold">Results shown here</Heading>
      <p className="text-center c-slate-100">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </article>
  );
};
