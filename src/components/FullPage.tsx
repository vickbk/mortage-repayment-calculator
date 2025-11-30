import { useContext } from "react";
import { Heading } from "./shared/Heading";
import { Main } from "./shared/Main";
import { HeadingCtx } from "../contexts/HeadingCtx";
import { MortageCalculator } from "./mortageCalculator/MortageCalculator";

export const FullPage = () => {
  const heading = useContext(HeadingCtx);
  return (
    <HeadingCtx value={heading}>
      <Main pageHasH1={false}>
        <Heading className="sr-only">A mortage calculator app</Heading>
        <MortageCalculator />
      </Main>
    </HeadingCtx>
  );
};
