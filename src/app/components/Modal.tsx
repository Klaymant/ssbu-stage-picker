import { ReactNode } from "react";

export function Modal({ children, name }: Props) {
  return (
    <div id={name} className="modal-window">
      <div>
        <a href="#" title="Close" className="modal-close hover:text-white">Close</a>
        {children}
      </div>
    </div>
  );
}

type Props = {
  children: ReactNode;
  name: string;
}