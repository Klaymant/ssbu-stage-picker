import { Stage } from "@/types/Stage";
import { StageView } from "./StageView";

/* eslint-disable @next/next/no-img-element */
export function StageElement({ stage, disabled, classes, action }: Props) {
  const baseClasses = 'w-full rounded';
  const stageClasses = [baseClasses, classes].join(' ');

  return (
    <section className="w-40 sm:w-40 my-3 text-xs relative">
      <button type="button" onClick={action} disabled={disabled}>
        <StageView stage={stage} classes={stageClasses} />
      </button>
      <div className="absolute top-1 left-1"></div>
    </section>
  );
}

type Props = {
  stage: Stage;
  disabled: boolean;
  classes: string;
  action: () => void;
};