"use client"

import { StageElement } from "@/app/StageElement";
import { useStageElement } from "./useStageElement";
import { Stage } from "@/types/Stage";
import BaseButton from "./BaseButton";
import ChosenStageView from "./ChosenStageView";

export function StageList() {
  const { stages, gamePhase, gamePhaseInstructions, action, reset } = useStageElement();
  const getDisableState = (stage: Stage) =>
    stage.state === 'banned' || stage.state === 'valided' || (stage.state === 'none' && gamePhase === 'validation');
  const getClasses = (stage: Stage) => {
    const noneClasses = stage.state === 'none' ? 'outline-2 outline-white' : '';
    const bannedClasses = stage.state === 'banned' ? 'outline-3 outline-red-500' : '';
    const pickedClasses = stage.state === 'picked' ? 'outline-3 outline-blue-500' : '';
    const validedClasses = stage.state === 'valided' ? 'outline-3 outline-green-500' : '';

    return [noneClasses, pickedClasses, bannedClasses, validedClasses].join(' ');
  }

  return (
    <>
      <h2 className="mt-4 text-center text-lg font-personal-services">{gamePhaseInstructions}</h2>
      <section className="flex justify-around flex-wrap gap-x-4 p-4 sm:p-8">
        {gamePhase !== 'done' && stages.map((stage, index) => (
          <StageElement
            key={stage.title}
            stage={stage}
            classes={getClasses(stage)}
            disabled={getDisableState(stage)}
            action={() => action(index)}
          />
        ))}
        {gamePhase === 'done' && <ChosenStageView stage={stages.find((stage) => stage.state === 'valided')} />}
      </section>
      <BaseButton onClick={reset}>Reset</BaseButton>
    </>
  );
}
