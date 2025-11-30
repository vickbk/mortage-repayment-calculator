import { Section } from "../../shared/Section";
import { CalculatedResults } from "./CalculatedResults";
import { EmptyResults } from "./EmptyResults";

export const Results = () => {
  return (
    <Section>
      <EmptyResults />
      <CalculatedResults />
    </Section>
  );
};
