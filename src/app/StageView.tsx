import { Stage } from "@/types/Stage";
import { CssClassHandler } from "./utils/CssClassHandler";

/* eslint-disable @next/next/no-img-element */
export function StageView({ stage, classes, size = 'small', revealMode = false }: Props) {
  const baseClasses = 'w-full w-auto object-cover';
  const sizeClasses = size === 'small' ? 'h-32' : 'h-48';
  const shakyClasses = revealMode ? 'grow-up' : '';
  const imgClasses = CssClassHandler.gather(baseClasses, sizeClasses, shakyClasses);
  const figureClasses = CssClassHandler.gather('rounded border-3', classes);

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
