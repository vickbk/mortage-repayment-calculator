import type { ResultsType } from "../../../libs/results";
import { Article } from "../../shared/Article";
import { CalculatedResults } from "./CalculatedResults";
import { EmptyResults } from "./EmptyResults";

export const Results = ({ results }: { results?: ResultsType }) => {
  return (
    <Article className="slate-900 c-white grid justify-items-center gap-8 p-8">
      {!results ? <EmptyResults /> : <CalculatedResults {...results} />}
    </Article>
  );
};
