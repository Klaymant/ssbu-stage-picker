import { Stage } from "@/types/Stage";
import { CssClassHandler } from "../utils/CssClassHandler";

const MODE_SIZES: Record<Mode, string> = {
  selection: 'h-32',
  reveal: 'h-48',
  ban: 'h-8',
};

/* eslint-disable @next/next/no-img-element */
export function StageView({ stage, classes, mode }: Props) {
  const baseClasses = 'w-full w-auto object-cover';
  const sizeClasses = MODE_SIZES[mode];
  const shakyClasses = mode === 'reveal' ? 'grow-up' : '';
  const imgClasses = CssClassHandler.gather(baseClasses, sizeClasses, shakyClasses);
  const borderColorClasses = mode === 'ban' ? 'border-red-500' : '';
  const figureClasses = mode === 'reveal' ? 'shaky' : CssClassHandler.gather('rounded border-3', borderColorClasses, classes);
  const figCaptionClasses = 'font-primary mt-2 mb-2';

  return (
    <figure className={figureClasses}>
      <img src={stage.url} alt={stage.title} className={imgClasses} />
      {mode !== 'ban' && <figcaption className={figCaptionClasses}>{stage.title}</figcaption>}
    </figure>
  );
}

type Props = {
  stage: Stage;
  classes?: string;
  mode: Mode;
};

type Mode = 'selection' | 'reveal' | 'ban';
