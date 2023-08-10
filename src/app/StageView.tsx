import { Stage } from "@/types/Stage";

/* eslint-disable @next/next/no-img-element */
export function StageView({ stage, classes, size = 'small', revealMode = false }: Props) {
  const baseClasses = 'w-full rounded outline outline-solid w-auto object-cover';
  const sizeClasses = size === 'small' ? 'h-32' : 'h-48';
  const shakyClasses = revealMode ? 'grow-up' : '';
  const allClasses = [baseClasses, sizeClasses, shakyClasses, classes].filter(Boolean).join(' ');

  return (
    <figure className={revealMode ? 'shaky' : ''}>
      <img src={stage.url} alt={stage.title} className={allClasses} />
      <figcaption className="text-center mt-2 text-xs font-personal-services">{stage.title}</figcaption>
    </figure>
  );
}

type Props = {
  stage: Stage;
  classes?: string;
  size?: 'small' | 'medium';
  revealMode?: boolean;
};
