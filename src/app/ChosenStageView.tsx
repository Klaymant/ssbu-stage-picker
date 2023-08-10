import { Stage } from "@/types/Stage";
import { StageView } from "./StageView";
import { useState } from "react";

const ChosenStageView = ({ stage }: Props) => {
  return (
    <section className="flex flex-col items-center mb-4">
      {stage && (
        <StageView stage={stage} size="medium" revealMode={true} />
      )}
    </section>
  );
};

type Props = {
  stage: Stage | undefined;
};

export default ChosenStageView;
