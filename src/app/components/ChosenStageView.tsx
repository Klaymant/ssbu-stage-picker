import { Stage } from "@/types/Stage";
import { StageView } from "./StageView";

export function ChosenStageView({ stage }: Props) {
  return (
    <section className="flex flex-col items-center mb-4">
      {stage && <StageView stage={stage} mode="reveal" />}
    </section>
  );
};

type Props = {
  stage: Stage | undefined;
};
