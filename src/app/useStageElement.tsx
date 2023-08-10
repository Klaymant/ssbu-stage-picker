"use client"

import { useState } from "react";
import { Stage, StageState } from "@/types/Stage";
import { baseStages } from "./stages";
import { GamePhase } from "@/types/GamePhase";
import { useAppContext } from "./contexts/AppProvider";
import { SetPhase } from "@/types/SetPhase";
import { SetRules } from "@/types/SetRules";

const SET_RULES: Record<SetPhase, SetRules> = {
  firstPick: {
    stagesToBan: 3,
    stagesToPick: 2,
    stagesToValidate: 1,
  },
  counterPick: {
    stagesToBan: 3,
    stagesToPick: 0,
    stagesToValidate: 1,
  },
};

export const useStageElement = () => {
  const [stages, setStages] = useState<Stage[]>(baseStages);
  const { setPhase } = useAppContext();

  const updateStageState = (value: StageState, index: number) => {
    const stagesCopy = [...stages];

    stagesCopy[index].state = value;
    setStages(stagesCopy);
  }

  const pickStage = (index: number) => {
    const stageState = stages[index].state === 'picked' ? 'none' : 'picked';

    updateStageState(stageState, index);
  };

  const validStage = (index: number) => {
    const stageState = stages[index].state === 'valided' ? 'none' : 'valided';

    updateStageState(stageState, index);
  };

  const banStage = (index: number) => {
    const stageState = stages[index].state === 'banned' ? 'none' : 'banned';

    updateStageState(stageState, index);
  };

  const cancelStageChoice = (index: number) => {
    updateStageState('none', index);
  };

  const reset = () => {
    setStages(stages.map((stage) => ({ ...stage, state: 'none' })));
  };

  const bannedStages = stages.filter((stage) => stage.state === 'banned');
  const pickedStages = stages.filter((stage) => stage.state === 'picked');
  const validedStages = stages.filter((stage) => stage.state === 'valided');

  const gamePhase: GamePhase = ((setRules: SetRules) => {
    if (bannedStages.length < setRules.stagesToBan) return 'ban';
    if (
      bannedStages.length >= setRules.stagesToBan &&
      (pickedStages.length < setRules.stagesToPick && validedStages.length < setRules.stagesToValidate) &&
      setPhase === 'firstPick')
      return 'pick';
    if (validedStages.length < setRules.stagesToValidate) return 'validation';
    return 'done';
  })(SET_RULES[setPhase]);

  const remainingBannedStages = SET_RULES.firstPick.stagesToBan - bannedStages.length;
  const remainingPickedStages = SET_RULES.firstPick.stagesToPick - pickedStages.length;
  const remainingValidedStages = SET_RULES.firstPick.stagesToValidate - validedStages.length;

  const gamePhaseInstructions = ((setRules: SetRules) => {
    switch (gamePhase) {
      case 'ban':
        return `Ban ${remainingBannedStages} stages`;
      case 'pick':
        return `Pick ${remainingPickedStages} stages`;
      case 'validation':
        return setRules.stagesToPick === 0 ?
          'Select the stage among the unbanned ones' :
          'Select the stage among the picked ones';
      case 'done':
        return 'Let\'s fight on...';
      default:
        throw new Error('Invalid stage phase');
    }
  })(SET_RULES[setPhase]);
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

  const getDisableState = (stage: Stage) => {
    if (SET_RULES[setPhase].stagesToPick > 0)
      return stage.state === 'banned' ||
        stage.state === 'picked' && gamePhase !== 'validation' ||
        (stage.state === 'none' && gamePhase === 'validation');
    
    return stage.state === 'banned';
  };

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
