"use client"

import { useStageElement } from "./useStageElement";
import { BaseButton } from "./BaseButton";
import { ChosenStageView } from "./ChosenStageView";
import { GamePhaseInstructions } from "./GamePhaseInstructions";
import { StageSelectionList } from "./StageSelectionList";

export function StageSelection() {
  const { stages, gamePhase, gamePhaseInstructions, action, reset, getDisableState } = useStageElement();
  const chosenStage = stages.find((stage) => stage.state === 'valided');
  const sectionBaseClasses = 'flex justify-around flex-wrap gap-x-2 p-1 sm:p-4';

  return (
    <>
      <GamePhaseInstructions gamePhaseInstructions={gamePhaseInstructions} />
      <section className={sectionBaseClasses}>
        {gamePhase !== 'done' && <StageSelectionList stages={stages} action={action} getDisableState={getDisableState} />}
        {gamePhase === 'done' && <ChosenStageView stage={chosenStage} />}
      </section>
      <BaseButton onClick={reset}>
        {chosenStage ? 'Next game' : 'Reset'}
      </BaseButton>
    </>
  );
}
