import { PhaseSelection } from "@/types/PhaseSelection";
import { Dispatch, SetStateAction } from "react";

export function PhaseSelector({ selection, setSelection }: Props) {
  const buttonClasses = 'border border-gray-500 rounded mx-2 p-1';
  const selectedClasses = 'bg-gray-500';

  return (
    <section className="flex">
      <button
        className={`${buttonClasses} ${selection === 'firstPick' && selectedClasses}`}
        onClick={() => setSelection('firstPick')}
      >
        First pick
      </button>
      <button
        className={`${buttonClasses} ${selection === 'counterpick' && selectedClasses}`}
        onClick={() => setSelection('counterpick')}
      >
        Counterpick
      </button>
    </section>
  );
}

type Props = {
  selection: PhaseSelection;
  setSelection: Dispatch<SetStateAction<PhaseSelection>>;
};