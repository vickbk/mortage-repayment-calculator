import { Heading } from "../../shared/Heading";
import { Section } from "../../shared/Section";

export const EmptyResults = () => {
  return (
    <Section>
      <img
        src="/public/assets/images/illustration-empty.svg"
        alt="Empty results"
      />
      <Heading>Results shown here</Heading>
      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </Section>
  );
};
