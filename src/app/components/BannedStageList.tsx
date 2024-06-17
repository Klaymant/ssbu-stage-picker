import { Stage } from "@/types/Stage";
import { StageView } from "./StageView";

export function BannedStagedList({ bannedStages }: Props) {
  return (
    <section className="flex gap-4">
      {bannedStages.map((stage) => <StageView key={stage.title} stage={stage} mode="ban" />)}
    </section>
  )
}

type Props = {
  bannedStages: Stage[];
};