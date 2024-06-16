import { SetPhase } from "@/types/SetPhase";
import { SetRules } from "@/types/SetRules";

export const SET_RULES: Record<SetPhase, SetRules> = {
  firstPick: {
    nbStagesToBan: 3,
    nbStagesToPick: 2,
    nbStagesToValidate: 1,
  },
  counterPick: {
    nbStagesToBan: 3,
    nbStagesToPick: 0,
    nbStagesToValidate: 1,
  },
};