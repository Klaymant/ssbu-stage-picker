import SelectionButton from "./SelectionButton";
import { useAppContext } from "./contexts/AppProvider";

export function PhaseSelector() {
  const { setPhase, setSetPhase } = useAppContext();

  return (
    <section className="flex">
      <SelectionButton
        isSelected={setPhase === 'firstPick'}
        onClick={() => setSetPhase('firstPick')}
      >
        First pick
      </SelectionButton>
      <SelectionButton
        isSelected={setPhase === 'counterPick'}
        onClick={() => setSetPhase('counterPick')}
      >
        Counterpick
      </SelectionButton>
    </section>
  );
}
