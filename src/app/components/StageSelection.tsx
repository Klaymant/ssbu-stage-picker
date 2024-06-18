"use client"

import { BannedStagedList } from "./BannedStageList";
import { BaseButton } from "./BaseButton";
import { ChosenStageView } from "./ChosenStageView";
import { GamePhaseInstructions } from "./GamePhaseInstructions";
import { StageSelectionList } from "./StageSelectionList";
import { useAppContext } from "../contexts/AppProvider";
import { useStagesContext } from "../contexts/StagesProvider";

export function StageSelection() {
  const { stages, gamePhase, gamePhaseInstructions, bannedStages, action, reset, getDisableState } = useStagesContext();
  const chosenStage = stages.find((stage) => stage.state === 'valided');
  const sectionBaseClasses = 'flex justify-around flex-wrap gap-x-2 p-1 sm:p-4';
  const { setSetPhase } = useAppContext();

  function handleNextGame() {
    setSetPhase('counterPick');
    reset();
  }

  return (
    <>
      <GamePhaseInstructions gamePhaseInstructions={gamePhaseInstructions} />
      {gamePhase !== 'done' && <BannedStagedList bannedStages={bannedStages} />}
      <section className={sectionBaseClasses}>
        {gamePhase !== 'done' && <StageSelectionList stages={stages} action={action} getDisableState={getDisableState} />}
        {gamePhase === 'done' && <ChosenStageView stage={chosenStage} />}
      </section>
        {chosenStage && (
          <BaseButton onClick={handleNextGame}>
            Next game
          </BaseButton>
        )}
    </>
  );
}
