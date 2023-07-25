"use client"

import { useState } from "react";
import { Stage, StageState } from "@/types/Stage";
import { baseStages } from "./stages";
import { GamePhase } from "@/types/GamePhase";

const NB_STAGES_TO_BAN = 3;
const NB_STAGES_TO_PICK = 2;
const NB_STAGES_TO_VALIDATE = 1;

export const useStageElement = () => {
  const [stages, setStages] = useState<Stage[]>(baseStages);

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

  const gamePhase: GamePhase = (() => {
    if (bannedStages.length < 3) return 'ban';
    if (bannedStages.length >= 3 && (pickedStages.length < 2 && validedStages.length < 1)) return 'pick';
    if (validedStages.length < 1) return 'validation';
    return 'done';
  })();

  const remainingBannedStages = NB_STAGES_TO_BAN - bannedStages.length;
  const remainingPickedStages = NB_STAGES_TO_PICK - pickedStages.length;
  const remainingValidedStages = NB_STAGES_TO_VALIDATE - validedStages.length;

  const gamePhaseInstructions = (() => {
    switch (gamePhase) {
      case 'ban':
        return `Ban ${remainingBannedStages} stages`;
      case 'pick':
        return `Pick ${remainingPickedStages} stages`;
      case 'validation':
        return `Select the stage among the picked ones`;
      case 'done':
        return 'Let\'s fight on';
      default:
        throw new Error('Invalid stage phase');
    }
  })();
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
    reset,
  };
};

export type UseStageElement = ReturnType<typeof useStageElement>;
