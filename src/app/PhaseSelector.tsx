import { SetPhase } from "@/types/SetPhase";
import SelectionButton from "./SelectionButton";
import { useAppContext } from "./contexts/AppProvider";
import { useStagesContext } from "./contexts/StagesProvider";

export function PhaseSelector() {
  const { setPhase, setSetPhase } = useAppContext();
  const { reset, gamePhase } = useStagesContext();

  function handlePhaseSelection(phase: SetPhase) {
    if (phase !== setPhase) {
      reset();
      setSetPhase(phase);
    }
  }

  gamePhase === 'done' && setSetPhase('firstPick');

  return (
    <>
      {gamePhase !== 'done' && (
        <section className="flex">
          <SelectionButton
            isSelected={setPhase === 'firstPick'}
            onClick={() => handlePhaseSelection('firstPick')}
          >
            First pick
          </SelectionButton>
          <SelectionButton
            isSelected={setPhase === 'counterPick'}
            onClick={() => handlePhaseSelection('counterPick')}
          >
            Counterpick
          </SelectionButton>
        </section>
      )}
    </>
  );
}
