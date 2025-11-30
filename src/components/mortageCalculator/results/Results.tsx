import type { ResultsType } from "../../../libs/results";
import { Article } from "../../shared/Article";
import { CalculatedResults } from "./CalculatedResults";
import { EmptyResults } from "./EmptyResults";

export const Results = ({ results }: { results?: ResultsType }) => {
  return (
    <Article>
      {!results ? <EmptyResults /> : <CalculatedResults {...results} />}
    </Article>
  );
};
