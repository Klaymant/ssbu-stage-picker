import { Stage } from "@/types/Stage";
import { StageView } from "./StageView";
import { CssClassHandler } from "../utils/CssClassHandler";

/* eslint-disable @next/next/no-img-element */
export function StageElement({ stage, disabled, classes, action }: Props) {
  const stageClasses = CssClassHandler.gather('w-full rounded', classes);

  return (
    <section className="w-40 sm:w-40 my-3 text-xs relative">
      <button type="button" onClick={action} disabled={disabled}>
        <StageView stage={stage} classes={stageClasses} mode="selection" />
      </button>
    </section>
  );
}

type Props = {
  stage: Stage;
  disabled: boolean;
  classes: string;
  action: () => void;
};