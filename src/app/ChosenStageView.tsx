import { Stage } from "@/types/Stage";
import { StageView } from "./StageView";

const ChosenStageView = ({ stage }: Props) => {
  return (
    <section className="flex flex-col items-center">
      {stage && (
        <StageView stage={stage} size="medium" />
      )}
    </section>
  );
};

type Props = {
  stage: Stage | undefined;
};

export default ChosenStageView;
