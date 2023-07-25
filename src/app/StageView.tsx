import { Stage } from "@/types/Stage";

/* eslint-disable @next/next/no-img-element */
export function StageView({ stage, classes }: Props) {
  const baseClasses = 'w-full rounded outline outline-solid';
  const allClasses = [baseClasses, classes].filter(Boolean).join(' ');

  return (
    <figure>
      <img src={stage.url} alt={stage.title} className={allClasses} />
      <figcaption className="text-center mt-2 text-xs font-personal-services">{stage.title}</figcaption>
    </figure>
  );
}

type Props = {
  stage: Stage;
  classes?: string;
};
