import { ReactNode } from "react";
import BaseButton from "./BaseButton";

const SelectionButton = ({ children, isSelected, onClick }: Props) => {
  const selectedClasses = 'bg-gray-500';

  return (
    <BaseButton
      classes={isSelected ? selectedClasses : ''}
      onClick={onClick}
    >
      {children}
    </BaseButton>
  );
};

type Props = {
  children: ReactNode;
  isSelected: boolean;
  onClick: () => void;
};

export default SelectionButton;
