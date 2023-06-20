"use client"

import { StageElement } from "@/app/Stage";
import { useStageElement } from "./useStageElement";

export function StageList() {
  const { stages, selectStage, banStage, cancelStageChoice } = useStageElement();

  return (
    <main className="flex justify-around flex-wrap gap-x-4 p-4 sm:p-8">
      {stages.map((stage, index) => (
        <StageElement
          key={stage.title}
          stage={stage}
          selectStage={() => selectStage(index)}
          banStage={() => banStage(index)}
          cancelStageChoice={() => cancelStageChoice(index)}
        />
      ))}
    </main>
  );
}
