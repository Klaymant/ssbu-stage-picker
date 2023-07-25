import { SetPhase } from "@/types/SetPhase";
import { Dispatch, SetStateAction } from "react";
import SelectionButton from "./SelectionButton";

export function PhaseSelector({ selection, setSelection }: Props) {
  return (
    <section className="flex">
      <SelectionButton
        isSelected={selection === 'firstPick'}
        onClick={() => setSelection('firstPick')}
      >
        First pick
      </SelectionButton>
      <SelectionButton
        isSelected={selection === 'counterpick'}
        onClick={() => setSelection('counterpick')}
      >
        Counterpick
      </SelectionButton>
    </section>
  );
}

type Props = {
  selection: SetPhase;
  setSelection: Dispatch<SetStateAction<SetPhase>>;
};