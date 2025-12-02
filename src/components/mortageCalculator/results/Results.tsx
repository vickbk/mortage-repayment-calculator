import type { ResultsType } from "../../../libs/results";
import { CalculatedResults } from "./CalculatedResults";
import { EmptyResults } from "./EmptyResults";

export const Results = ({ results }: { results?: ResultsType }) => {
  return (
    <div className="slate-900 c-white grid justify-items-center lg:items-center gap-8 p-8 md:rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-[8rem]">
      {!results ? <EmptyResults /> : <CalculatedResults {...results} />}
    </div>
  );
};
