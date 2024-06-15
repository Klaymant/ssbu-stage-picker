import { ReactNode } from "react";

export function GamePhaseInstructions({ gamePhaseInstructions }: Props) {
	return (
		<h2 className={`my-4 text-center text-lg font-personal-services rounded`}>
				{gamePhaseInstructions}
		</h2>
	);
}

type Props = {
  gamePhaseInstructions: ReactNode;
};