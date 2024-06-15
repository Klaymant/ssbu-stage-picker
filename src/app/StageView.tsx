import { Stage } from "@/types/Stage";

/* eslint-disable @next/next/no-img-element */
export function StageView({ stage, classes, size = 'small', revealMode = false }: Props) {
  const baseClasses = 'w-full w-auto object-cover';
  const sizeClasses = size === 'small' ? 'h-32' : 'h-48';
  const shakyClasses = revealMode ? 'grow-up' : '';
  const imgClasses = [baseClasses, sizeClasses, shakyClasses].filter(Boolean).join(' ');
  const figureClasses = ['rounded border-3', classes].filter(Boolean).join(' ');

  return (
    <figure className={revealMode ? 'shaky' : figureClasses}>
      <img src={stage.url} alt={stage.title} className={imgClasses} />
      <figcaption className="text-center mt-2 mb-2 text-xs font-personal-services">{stage.title}</figcaption>
    </figure>
  );
}

type Props = {
  stage: Stage;
  classes?: string;
  size?: 'small' | 'medium';
  revealMode?: boolean;
};
