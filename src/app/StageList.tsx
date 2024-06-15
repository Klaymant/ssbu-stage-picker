"use client"

import { StageElement } from "@/app/StageElement";
import { useStageElement } from "./useStageElement";
import { Stage } from "@/types/Stage";
import BaseButton from "./BaseButton";
import ChosenStageView from "./ChosenStageView";
import { GamePhaseInstructions } from "./GamePhaseInstructions";

export function StageList() {
  const { stages, gamePhase, gamePhaseInstructions, action, reset, getDisableState } = useStageElement();
  const isStageChosen = stages.find((stage) => stage.state === 'valided');

  return (
    <>
      <GamePhaseInstructions gamePhaseInstructions={gamePhaseInstructions} />
      <section className="flex justify-around flex-wrap gap-x-2 p-1 sm:p-4">
        {gamePhase !== 'done' && stages.map((stage, index) => (
          <StageElement
            key={stage.title}
            stage={stage}
            classes={getStageClasses(stage)}
            disabled={getDisableState(stage)}
            action={() => action(index)}
          />
        ))}
        {gamePhase === 'done' && <ChosenStageView stage={isStageChosen} />}
      </section>
      <BaseButton onClick={reset}>
        {isStageChosen ? 'Next game' : 'Reset'}
      </BaseButton>
    </>
  );

  function getStageClasses(stage: Stage): string {
    switch(stage.state) {
      case 'none':
        return 'border-white';
      case 'banned':
        return 'border-red-500';
      case 'picked':
        return 'border-blue-500';
      case 'valided':
        return 'border-green-500';
    }
  };
}
