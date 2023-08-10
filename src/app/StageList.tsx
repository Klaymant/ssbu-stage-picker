"use client"

import { StageElement } from "@/app/StageElement";
import { useStageElement } from "./useStageElement";
import { Stage } from "@/types/Stage";
import BaseButton from "./BaseButton";
import ChosenStageView from "./ChosenStageView";
import { GamePhaseInstructions } from "./GamePhaseInstructions";

export function StageList() {
  const { stages, gamePhase, gamePhaseInstructions, action, reset, getDisableState } = useStageElement();
  const getClasses = (stage: Stage) => {
    const noneClasses = stage.state === 'none' ? 'outline-2 outline-white' : '';
    const bannedClasses = stage.state === 'banned' ? 'outline-3 outline-red-500' : '';
    const pickedClasses = stage.state === 'picked' ? 'outline-3 outline-blue-500' : '';
    const validedClasses = stage.state === 'valided' ? 'outline-3 outline-green-500' : '';

    return [noneClasses, pickedClasses, bannedClasses, validedClasses].join(' ');
  }

  return (
    <>
      <GamePhaseInstructions gamePhaseInstructions={gamePhaseInstructions} />
      <section className="flex justify-around flex-wrap gap-x-2 p-1 sm:p-4">
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
