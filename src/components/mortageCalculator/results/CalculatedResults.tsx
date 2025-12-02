import { currencyFormatter } from "../../../libs/currencyFormatter";
import type { ResultsType } from "../../../libs/results";
import { Article } from "../../shared/Article";
import { Heading } from "../../shared/Heading";
import { Section } from "../../shared/Section";

export const CalculatedResults = ({
  monthly,
  term,
  isInterest,
}: ResultsType) => {
  return (
    <Article className="grid gap-8 md:gap-12 lg:place-self-start">
      <Heading className="place-self-start text-2xl md:text-3xl font-semibold">
        Your results
      </Heading>
      <p className="c-slate-300">
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="c-slate-300 slate-950 rounded-lg p-4 md:p-8 border-t-6 b-lime">
        <Section>
          <Heading>
            Your monthly {isInterest ? "interest" : "repayments"}
          </Heading>
          <p className="c-lime text-3xl sm:text-5xl font-bold py-4 md:pb-8 border-b b-slate-700">
            {currencyFormatter({ amount: monthly, currency: "GBP" })}
          </p>
        </Section>
        <Article>
          <Heading className="py-4 md:pt-8">
            Total you will repay over the term
          </Heading>
          <p className="text-2xl md:text-3xl font-bold c-white">
            {currencyFormatter({ amount: term, currency: "GBP" })}
          </p>
        </Article>
      </div>
    </Article>
  );
};
