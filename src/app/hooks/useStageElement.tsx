"use client"

import { ReactNode, useState } from "react";
import { Stage, StageState } from "@/types/Stage";
import { baseStages } from "../stages";
import { GamePhase } from "@/types/GamePhase";
import { useAppContext } from "../contexts/AppProvider";
import { SetRules } from "@/types/SetRules";
import { SET_RULES } from "../rules";

export function useStageElement() {
  const [stages, setStages] = useState<Stage[]>(baseStages);
  const { setPhase } = useAppContext();

  const bannedStages = stages.filter((stage) => stage.state === 'banned');
  const pickedStages = stages.filter((stage) => stage.state === 'picked');
  const validedStages = stages.filter((stage) => stage.state === 'valided');

  const gamePhase: GamePhase = getGamePhase(SET_RULES[setPhase]);
  const remainingBannedStages = SET_RULES.firstPick.nbStagesToBan - bannedStages.length;
  const remainingPickedStages = SET_RULES.firstPick.nbStagesToPick - pickedStages.length;
  const remainingValidedStages = SET_RULES.firstPick.nbStagesToValidate - validedStages.length;
  const gamePhaseInstructions = getGamePhaseInstructions(SET_RULES[setPhase]);

  const action = (() => {
    switch (gamePhase) {
      case 'ban':
        return banStage;
      case 'pick':
        return pickStage;
      case 'validation':
        return validStage;
      default:
        return () => {};
    }
  })();

  function updateStageState(value: StageState, index: number) {
    const stagesCopy = [...stages];

    stagesCopy[index].state = value;
    setStages(stagesCopy);
  }

  function pickStage(index: number) {
    const stageState = stages[index].state === 'picked' ? 'none' : 'picked';

    updateStageState(stageState, index);
  };

  function validStage(index: number) {
    const stageState = stages[index].state === 'valided' ? 'none' : 'valided';

    updateStageState(stageState, index);
  };

  function banStage(index: number) {
    const stageState = stages[index].state === 'banned' ? 'none' : 'banned';

    updateStageState(stageState, index);
  };

  function cancelStageChoice(index: number) {
    updateStageState('none', index);
  };

  function reset() {
    setStages(stages.map((stage) => ({ ...stage, state: 'none' })));
  };

  function getDisableState(stage: Stage): boolean {
    if (SET_RULES[setPhase].nbStagesToPick > 0)
      return stage.state === 'banned' ||
        stage.state === 'picked' && gamePhase !== 'validation' ||
        (stage.state === 'none' && gamePhase === 'validation');
    
    return stage.state === 'banned';
  };

  function getGamePhase(setRules: SetRules): GamePhase {
    const pickConditions =
      bannedStages.length >= setRules.nbStagesToBan &&
      (pickedStages.length < setRules.nbStagesToPick && validedStages.length < setRules.nbStagesToValidate) &&
      setPhase === 'firstPick';

    if (bannedStages.length < setRules.nbStagesToBan)
      return 'ban';
    if (pickConditions)
      return 'pick';
    if (validedStages.length < setRules.nbStagesToValidate)
      return 'validation';
    return 'done';
  }

  function getGamePhaseInstructions(setRules: SetRules): ReactNode {
    switch (gamePhase) {
      case 'ban':
        return <>Player A <span className="text-red-500">bans</span> {remainingBannedStages} stages</>;
      case 'pick':
        return <>Player B <span className="text-blue-500">picks</span> {remainingPickedStages} stages</>;
      case 'validation':
        return setRules.nbStagesToPick === 0 ?
          <>Player B <span className="text-green-500">selects</span> a stage among the unbanned ones</> :
          <>Player A <span className="text-green-500">selects</span> the stage among the picked ones</>;
      case 'done':
        return 'Let\'s fight on...';
      default:
        throw new Error('Invalid stage phase');
    }
  }

  return {
    stages,
    bannedStages,
    pickedStages,
    validedStages,
    gamePhase,
    remainingBannedStages,
    remainingPickedStages,
    remainingValidedStages,
    gamePhaseInstructions,
    action,
    pickStage,
    validStage,
    banStage,
    cancelStageChoice,
    getDisableState,
    reset,
  };
};

export type UseStageElement = ReturnType<typeof useStageElement>;
