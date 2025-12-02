import type { ResultsType } from "../libs/results";

export const calculateResults = (_: unknown, data: FormData) => {
  console.log(data);
  return { monthly: 23444, term: 5 } as ResultsType;
};
