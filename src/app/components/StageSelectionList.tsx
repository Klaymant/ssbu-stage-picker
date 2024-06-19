import { Stage } from "@/types/Stage";
import { StageElement } from "./StageElement";

export function StageSelectionList({ stages, action, getDisableState }: Props) {
  return <>
    {stages.map((stage, index) => {
      if (stage.state !== 'banned') {
        return (
          <StageElement
            key={stage.title}
            stage={stage}
            classes={getStageClasses(stage)}
            disabled={getDisableState(stage)}
            action={() => action(index)}
          />
        );
      }
    })}
  </>
}

function getStageClasses(stage: Stage): string {
  switch(stage.state) {
    case 'none':
      return 'border-white hover:border-purple-800';
    case 'banned':
      return 'border-red-500';
    case 'picked':
      return 'border-blue-500';
    case 'valided':
      return 'border-green-500';
  }
};

type Props = {
  stages: Stage[];
  action: (index: number) => void;
  getDisableState: (stage: Stage) => boolean;
};