import { ReactNode, createContext, useContext } from "react";
import { useStageElement } from "../hooks/useStageElement";

const StagesContext = createContext<StagesContextValues | null>(null);

export function useStagesContext() {
  const context = useContext(StagesContext);

	if (!context) {
		throw new Error('useStagesContext must be used within StagesProvider');
	}

	return context;
}

export function StagesProvider({ children }: { children: ReactNode }) {
	const stagesElement = useStageElement();

	return (
		<StagesContext.Provider value={stagesElement}>
			{children}
		</StagesContext.Provider>
	);
}

type StagesContextValues = ReturnType<typeof useStageElement>;