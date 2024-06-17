import { ReactNode } from "react";
import { CssClassHandler } from "../utils/CssClassHandler";

export function BaseButton({ children, classes, onClick }: Props) {
  const buttonBaseClasses = 'border border-gray-500 rounded mx-2 p-1 font-personal-services';
  const buttonClasses = CssClassHandler.gather(buttonBaseClasses, classes);

  return (
    <button
      type="button"
      className={buttonClasses}
      onClick={onClick && onClick}
    >
      {children}
    </button>
  );
};

type Props = {
  children: ReactNode;
  classes?: string;
  onClick?: () => void;
};
