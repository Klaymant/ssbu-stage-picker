import { ReactNode } from "react";

export function GamePhaseInstructions({ gamePhaseInstructions }: Props) {
	const baseClasses = 'my-4 text-center text-lg font-personal-services rounded';

	return (
		<h2 className={baseClasses}>
				{gamePhaseInstructions}
		</h2>
	);
}

type Props = {
  gamePhaseInstructions: ReactNode;
};