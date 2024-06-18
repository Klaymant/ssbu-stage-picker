import { ReactNode } from "react";
import { CssClassHandler } from "../utils/CssClassHandler";

export function BaseButton({ children, classes, changeWhenHovered = true, onClick }: Props) {
  const buttonBaseClasses = 'border border-gray-500 rounded mx-2 p-1 font-personal-services';
  const buttonHoverClasses = changeWhenHovered ? 'hover:border-purple-500 hover:text-purple-500' : '';
  const buttonClasses = CssClassHandler.gather(buttonBaseClasses, buttonHoverClasses, classes);

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
  changeWhenHovered?: boolean;
  onClick?: () => void;
};
