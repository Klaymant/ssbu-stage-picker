import { ReactNode } from "react";

const BaseButton = ({ children, classes, onClick }: Props) => {
  const buttonBaseClasses = 'border border-gray-500 rounded mx-2 p-1 font-personal-services';
  const buttonClasses = [buttonBaseClasses, classes].filter(Boolean).join(' ');

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

export default BaseButton;
