import { SetPhase } from "@/types/SetPhase";
import { SetRules } from "@/types/SetRules";

export const SET_RULES: Record<SetPhase, SetRules> = {
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